import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';

const routes: Routes = [
{ path: "events", component: EventsListComponent }
]

@NgModule({
declarations: [EventsListComponent],
imports: [
CommonModule,
RouterModule.forChild(routes)
]
})
export class EventsModule { }
