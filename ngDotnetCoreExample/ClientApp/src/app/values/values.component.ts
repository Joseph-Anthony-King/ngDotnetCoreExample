import { Component, OnInit } from '@angular/core';
import { ValuesService } from './values.service';

@Component({
    templateUrl: './values.component.html',
    styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

    private values: string[];
    private errorMessage: string;

    constructor(private valuesService: ValuesService) { }

    ngOnInit() {

        this.valuesService.getValues().subscribe(
            values => {
                this.values = values;
            },
            error => this.errorMessage = <any>error
        );
    }

}
