import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SwirlComponent} from "./swirl.component";

const routes: Routes = [
  {
    path: 'swirl',
    component: SwirlComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwirlRoutingModule {}
