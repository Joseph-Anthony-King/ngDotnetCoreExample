import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ValuesComponent } from './values.component';

@NgModule({
  declarations: [ValuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: "values", component: ValuesComponent }
    ])
  ]
})
export class ValuesModule { }
