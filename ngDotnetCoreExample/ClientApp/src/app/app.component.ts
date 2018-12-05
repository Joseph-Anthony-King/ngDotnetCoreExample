import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private appTitle: string;
    private date: Date;

    constructor() { }

    ngOnInit(): void {
        this.appTitle = 'My Calendar App!';
        this.date = new Date();
    }
}
