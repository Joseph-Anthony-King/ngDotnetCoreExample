import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEvent } from '../event';
import { EventsService } from '../events.service';

@Component({
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {

    private event: IEvent | undefined;
    private errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        this.eventsService.getEvent(id).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error
        );
    }
}
