import { Component, OnInit } from '@angular/core';
import {SwirlContentManagerService} from '../../core/services/swirl/swirl-content-manager.service';

@Component({
  selector: 'swirl-text',
  templateUrl: './swirl-text.component.html',
  styleUrls: ['./swirl-text.component.css']
})
export class SwirlTextComponent implements OnInit {

  constructor(public contentService: SwirlContentManagerService) { }

  ngOnInit(): void {
  }

}
