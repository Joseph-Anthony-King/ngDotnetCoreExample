import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { UtilsModule } from '../utils/utils.module';

const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventsDetailComponent }
]

@NgModule({
    declarations: [EventsListComponent, EventsDetailComponent],
    imports: [
        CommonModule,
        UtilsModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        RouterModule.forChild(routes)
    ]
})
export class EventsModule { }
