import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
    templateUrl: './events-scheduler.component.html',
    styleUrls: ['./events-scheduler.component.css']
})
export class EventsSchedulerComponent implements OnInit {

    public title: string;

    public events$: Event[];
    private errorMessage: string;

    constructor(private eventsService: EventsService, private router: Router) { }

    ngOnInit() {

        this.title = 'My Schedule!';

        this.eventsService.getEvents().subscribe(
            events => {
                this.events$ = events;
            },
            error => this.errorMessage = <any>error,
            () => console.log(this.events$)
        );
    }

    deleteEvent(eventID: number): void {

        this.eventsService.deleteEvent(eventID).subscribe(
            () => {
                console.log('Deletion successful!');
                location.reload();
            },
            error => this.errorMessage = <any>error
        );
    }

    eventAdd(): void {
        this.router.navigate(['/event-add']);
    }
}
