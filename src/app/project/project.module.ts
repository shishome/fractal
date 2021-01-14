import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { ProjectComponent } from './project.component';
import { SharedModule } from '../shared/shared.module';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, SharedModule, ProjectRoutingModule, MDBBootstrapModule.forRoot(), CoreModule]
})
export class ProjectModule {}
