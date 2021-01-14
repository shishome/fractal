import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import {SwirlComponent} from "./swirl.component";
import {SwirlRoutingModule} from "./swirl-routing.module";
import {SwirlTextComponent} from "./swirl-text/swirl-text.component";
import {SwirlInternalImagesComponent} from "./swirl-internal-images/swirl-internal-images.component";
import {CoreModule} from "../core/core.module";

@NgModule({
    declarations: [SwirlComponent, SwirlTextComponent, SwirlInternalImagesComponent],
    imports: [CommonModule, SharedModule, SwirlRoutingModule, CoreModule]
})
export class SwirlModule {}
