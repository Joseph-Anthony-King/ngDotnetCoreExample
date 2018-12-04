import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventsService } from '../events.service';
import { IEvent } from '../event';

@Component({
    templateUrl: './events-detail.component.html',
    styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

    event: IEvent | undefined;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

    ngOnInit() {

        let id = +this.route.snapshot.paramMap.get('id');

        this.eventsService.getEvent(id).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error
        );
    }

}
