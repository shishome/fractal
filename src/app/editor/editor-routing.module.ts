import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpiralUiComponent } from './spiral-ui/spiral-ui.component';
import {ProjectIndexComponent} from "./project-index/project-index.component";

const routes: Routes = [
  {
    path: 'editor',
    component: ProjectIndexComponent
  },
  {
    path: 'editor/spiral-ui',
    component: SpiralUiComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
