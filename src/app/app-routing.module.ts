import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import {SwirlRoutingModule} from "./swirl/swirl-routing.module";
import {ProjectRoutingModule} from "./project/project-routing.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    ProjectRoutingModule,
    SwirlRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
