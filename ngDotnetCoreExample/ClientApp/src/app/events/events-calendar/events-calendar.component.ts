import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventsService } from '../events.service';
import { CalendarItem } from '../CalendarItem';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './events-calendar.component.html',
    styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit {

    public view: string;
    public viewDate: Date = new Date();

    public appEvents: CalendarItem[];
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
                    title: appEvent.calendarItemTitle,
                    start: new Date(appEvent.calendarItemStartDate),
                    end: new Date(appEvent.calendarItemEndDate)}));
                this.eventsDownloaded = true;
            }
        );
    }
}
