import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
]

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }
