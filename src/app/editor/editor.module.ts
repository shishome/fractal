import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';

import { SpiralUiComponent } from './spiral-ui/spiral-ui.component';
import { SharedModule } from '../shared/shared.module';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {CoreModule} from "../core/core.module";
import { ProjectIndexComponent } from './project-index/project-index.component';

@NgModule({
  declarations: [
      SpiralUiComponent,
      ProjectIndexComponent,
  ],
  imports: [CommonModule, SharedModule, EditorRoutingModule, MDBBootstrapModule.forRoot(), CoreModule]
})
export class EditorModule {}
