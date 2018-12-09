import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './events-calendar.component.html',
    styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit {

    public view: string;
    public viewDate: Date = new Date();

    public appEvents: Event[];
    public events$: CalendarEvent[] = [];

    public eventsDownloaded: boolean;

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
                this.appEvents.map(appEvent => this.events$.push({
                    title: appEvent.calendarEventTitle,
                    start: new Date(appEvent.calendarEventStartDate),
                    end: new Date(appEvent.calendarEventEndDate)}));
                this.eventsDownloaded = true;
            }
        );
    }
}
