import { Component, OnInit } from '@angular/core';
import {SwirlContentManagerService} from "../../core/services/swirl/swirl-content-manager.service";

@Component({
  selector: 'swirl-internal-images',
  templateUrl: './swirl-internal-images.component.html',
  styleUrls: ['./swirl-internal-images.component.css']
})
export class SwirlInternalImagesComponent implements OnInit {

  constructor(
      public contentService: SwirlContentManagerService
  ) { }

  ngOnInit(): void {
  }

}
