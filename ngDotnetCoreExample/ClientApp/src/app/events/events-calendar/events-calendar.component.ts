import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventsService } from '../events.service';
import { IEvent } from '../event';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './events-calendar.component.html',
    styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit {

    private view: string;
    private viewDate: Date = new Date();

    private appEvents: IEvent[];
    private events: CalendarEvent[] = [];

    private eventsDownloaded: boolean;

    private errorMessage: string;

    constructor(private eventsService: EventsService) { }

    ngOnInit() {

        this.view = 'day';
        this.eventsDownloaded = false;

        this.eventsService.getEvents().subscribe(
            events => {
                this.appEvents = events;
            },
            error => this.errorMessage = <any>error,
            // tslint:disable-next-line:max-line-length
            () => {
                this.appEvents.map(appEvent => this.events.push({
                    title: appEvent.appEventTitle, 
                    start: new Date(appEvent.appEventStartDate), 
                    end: new Date(appEvent.appEventEndDate)}));
                this.eventsDownloaded = true;
            }
        );
    }
}
