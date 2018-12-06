import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsAddComponent implements OnInit {

    private title: string;
    private event: Event | undefined;
    private startDate: Date;
    private endDate: Date;
    private errorMessage: string;

    constructor(private router: Router, private eventsService: EventsService) { }

    ngOnInit() {
        this.title = 'New Event';
        this.event = new Event();
        this.event.appEventTitle = this.title;
        this.event.appEventDescription = '... ';
        this.event.appEventStartDate = new Date().toUTCString();
        this.startDate = new Date(this.event.appEventStartDate);
    }

    onBack(): void {
        this.router.navigate(['/schedule']);
    }

    submit(): void {

        const sDate = this.startDate.toISOString();
        const eDate = this.endDate.toISOString();

        this.event.appEventStartDate = sDate;
        this.event.appEventEndDate = eDate;

        this.eventsService.postEvent(this.event).subscribe(
            () => {
                console.log(this.event.appEventTitle + ' has been added.');
                this.router.navigate(['/schedule']);
            },
            error => this.errorMessage = <any>error
        );
    }
}
