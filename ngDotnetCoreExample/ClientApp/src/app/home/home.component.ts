import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private homeTitle: string;

    constructor() {

        this.homeTitle = 'My Angular Dotnet Core Example App';
    }
}
