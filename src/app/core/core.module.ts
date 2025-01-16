import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './apps/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownAnchor, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        NgbDropdownModule
    ]
})
export class CoreModule { }
