import {ChangeDetectorRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';

import { SpiralUiComponent } from './spiral-ui/spiral-ui.component';
import { SharedModule } from '../shared/shared.module';
import {CoreModule} from "../core/core.module";
import { ProjectIndexComponent } from './project-index/project-index.component';
import {NgbDropdown, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
      SpiralUiComponent,
      ProjectIndexComponent
  ],
    providers: [NgbDropdown],
  imports: [CommonModule, SharedModule, EditorRoutingModule, CoreModule, NgbDropdownModule]
})
export class EditorModule {}
