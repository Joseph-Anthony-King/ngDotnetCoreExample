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
        this.event.calendarEventTitle = this.title;
        this.event.calendarEventDescription = '... ';
        this.event.calendarEventStartDate = new Date().toUTCString();
        this.startDate = new Date(this.event.calendarEventStartDate);
    }

    onBack(): void {
        this.router.navigate(['/schedule']);
    }

    submit(): void {

        const sDate = this.startDate.toISOString();
        const eDate = this.endDate.toISOString();

        this.event.calendarEventStartDate = sDate;
        this.event.calendarEventEndDate = eDate;

        this.eventsService.postEvent(this.event).subscribe(
            () => {
                console.log(this.event.calendarEventTitle + ' has been added.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
