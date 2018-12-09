import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {

    public title: string;
    public event: Event | undefined;
    public startDate: Date;
    public endDate: Date;
    private errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

    ngOnInit() {

        const id = +this.route.snapshot.paramMap.get('id');

        this.eventsService.getEvent(id).subscribe(
            event => {
                this.event = event;
                this.startDate = new Date(this.event.CalendarEventStartDate);
                this.endDate = new Date(this.event.CalendarEventEndDate);
                this.title = event.CalendarEventTitle;
            },
            error => this.errorMessage = <any>error
        );
    }

    onBack(): void {
        this.router.navigate(['/schedule']);
    }

    submit(): void {

        const sDate = this.startDate.toISOString();
        const eDate = this.endDate.toISOString();

        this.event.CalendarEventStartDate = sDate;
        this.event.CalendarEventEndDate = eDate;

        this.eventsService.updateEvent(this.event).subscribe(
            () => {
                console.log(this.event.CalendarEventTitle + ' has been updated.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
