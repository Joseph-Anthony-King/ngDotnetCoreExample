import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';

const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventsDetailComponent }
]

@NgModule({
    declarations: [EventsListComponent, EventsDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class EventsModule { }
