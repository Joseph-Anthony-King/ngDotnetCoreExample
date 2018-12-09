import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsAddComponent implements OnInit {

    public title: string;
    public event: Event | undefined;
    public startDate: Date;
    public endDate: Date;
    private errorMessage: string;

    constructor(private router: Router, private eventsService: EventsService) { }

    ngOnInit() {
        this.title = 'New Event';
        this.event = new Event();
        this.event.CalendarEventTitle = this.title;
        this.event.CalendarEventDescription = '... ';
        this.event.CalendarEventStartDate = new Date().toUTCString();
        this.startDate = new Date(this.event.CalendarEventStartDate);
    }

    onBack(): void {
        this.router.navigate(['/schedule']);
    }

    submit(): void {

        const sDate = this.startDate.toISOString();
        const eDate = this.endDate.toISOString();

        this.event.CalendarEventStartDate = sDate;
        this.event.CalendarEventEndDate = eDate;

        this.eventsService.postEvent(this.event).subscribe(
            () => {
                console.log(this.event.CalendarEventTitle + ' has been added.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
