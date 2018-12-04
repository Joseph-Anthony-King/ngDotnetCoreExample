import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { IEvent } from '../event';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    private events: IEvent[];
    private errorMessage: string;

    constructor(private eventsService: EventsService) { }

    ngOnInit() {

        this.eventsService.getEvents().subscribe(
            events => {
                this.events = events;
            },
            error => this.errorMessage = <any>error
        );
    }
}
