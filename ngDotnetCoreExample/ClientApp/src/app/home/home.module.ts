import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: "home", component: HomeComponent },
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "**", redirectTo: "home", pathMatch: "full" }
    ])
  ]
})
export class HomeModule { }
