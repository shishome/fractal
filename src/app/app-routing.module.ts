import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import {SwirlRoutingModule} from "./swirl/swirl-routing.module";
import {EditorRoutingModule} from "./editor/editor-routing.module";
import {CreditsComponent} from "./credits/credits.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'credits',
    component: CreditsComponent
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
    EditorRoutingModule,
    SwirlRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
