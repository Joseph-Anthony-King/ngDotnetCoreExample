import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ValuesModule } from './values/values.module';
import { EventsModule } from './events/events.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        EventsModule,
        ValuesModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
