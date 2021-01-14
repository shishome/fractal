import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './apps/navbar/navbar.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MDBBootstrapModule
    ]
})
export class CoreModule { }
