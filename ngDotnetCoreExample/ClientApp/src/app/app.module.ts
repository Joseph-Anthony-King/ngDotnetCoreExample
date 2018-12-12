import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { CachingInterceptor } from './shared/caching.interceptor';
import { UtilsModule } from './utils/utils.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        DlDateTimePickerDateModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        UtilsModule,
        EventsModule,
        HomeModule
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CachingInterceptor,
          multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
