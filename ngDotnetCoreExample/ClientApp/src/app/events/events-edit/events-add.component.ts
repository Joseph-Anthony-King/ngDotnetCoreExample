import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CalendarItem } from '../CalendarItem';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsAddComponent implements OnInit {

    public title: string;
    public event: CalendarItem | undefined;
    public startDate: Date;
    public endDate: Date;
    private errorMessage: string;

    constructor(private router: Router, private eventsService: EventsService) { }

    ngOnInit() {
        this.title = 'New Event';
        this.event = new CalendarItem();
        this.event.calendarItemTitle = this.title;
        this.event.calendarItemDescription = '... ';
        this.event.calendarItemStartDate = new Date().toUTCString();
        this.startDate = new Date(this.event.calendarItemStartDate);
    }

    onBack(): void {
        this.router.navigate(['/schedule']);
    }

    submit(): void {

        const sDate = this.startDate.toISOString();
        const eDate = this.endDate.toISOString();

        this.event.calendarItemStartDate = sDate;
        this.event.calendarItemEndDate = eDate;

        this.eventsService.postEvent(this.event).subscribe(
            () => {
                console.log(this.event.calendarItemTitle + ' has been added.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
