import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { UtilsModule } from '../utils/utils.module';
import { EventsSchedulerComponent } from './events-scheduler/events-scheduler.component';
import { EventsEditComponent } from './events-edit/events-edit.component';

const routes: Routes = [
    { path: 'calendar', component: EventsCalendarComponent },
    { path: 'schedule', component: EventsSchedulerComponent },
    { path: 'event-edit/:id', component: EventsEditComponent }
]

@NgModule({
    declarations: [EventsCalendarComponent, EventsSchedulerComponent, EventsEditComponent],
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
