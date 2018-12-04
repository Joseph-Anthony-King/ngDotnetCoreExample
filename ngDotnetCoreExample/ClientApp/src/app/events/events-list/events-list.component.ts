import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventsService } from '../events.service';
import { IEvent } from '../event';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';

@Component({
    selector: 'app-events-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    private view: string = 'month';
    private viewDate: Date = new Date();

    private appEvents: IEvent[];
    private events: CalendarEvent[];

    private errorMessage: string;

    constructor(private eventsService: EventsService) { }

    ngOnInit() {

        this.eventsService.getEvents().subscribe(
            events => {
                this.appEvents = events;
            },
            error => this.errorMessage = <any>error
        );
    }
}