import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { IEvent } from '../event';

@Component({
    selector: 'app-events-scheduler',
    templateUrl: './events-scheduler.component.html',
    styleUrls: ['./events-scheduler.component.css']
})
export class EventsSchedulerComponent implements OnInit {

    private title: string;

    private events: IEvent[];
    private errorMessage: string;

    constructor(private eventsService: EventsService, private router: Router) { }

    ngOnInit() {

        this.title = 'My Schedule!';

        this.eventsService.getEvents().subscribe(
            events => {
                this.events = events;
            },
            error => this.errorMessage = <any>error
        );
    }

    deleteEvent(eventID: number): void {
        
        this.eventsService.deleteEvent(eventID).subscribe(
            () => {
                console.log('Deletion successful!'); 
                location.reload()
            },
            error => this.errorMessage = <any>error
        );
    }
}