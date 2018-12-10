import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CalendarItem } from '../CalendarItem';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {

    public title: string;
    public event: CalendarItem | undefined;
    public startDate: Date;
    public endDate: Date;
    private errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

    ngOnInit() {

        const id = +this.route.snapshot.paramMap.get('id');

        this.eventsService.getEvent(id).subscribe(
            event => {
                this.event = event;
                this.startDate = new Date(this.event.calendarItemStartDate);
                this.endDate = new Date(this.event.calendarItemEndDate);
                this.title = event.calendarItemTitle;
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

        this.event.calendarItemStartDate = sDate;
        this.event.calendarItemEndDate = eDate;

        this.eventsService.updateEvent(this.event).subscribe(
            () => {
                console.log(this.event.calendarItemTitle + ' has been updated.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
