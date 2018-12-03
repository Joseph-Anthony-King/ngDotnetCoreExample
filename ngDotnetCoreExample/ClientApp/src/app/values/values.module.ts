import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ValuesComponent } from './values.component';

const routes: Routes = [
    { path: "values", component: ValuesComponent }
]

@NgModule({
    declarations: [ValuesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ValuesModule { }
