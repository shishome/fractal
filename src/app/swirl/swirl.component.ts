import {Component, OnDestroy, OnInit} from '@angular/core';
import {SwirlContentManagerService} from '../core/services/swirl/swirl-content-manager.service';

@Component({
  selector: 'app-swirl',
  templateUrl: './swirl.component.html',
  styleUrls: ['./swirl.component.css']
})
export class SwirlComponent implements OnInit, OnDestroy {

  constructor(public contentService: SwirlContentManagerService) { }

  ngOnInit(): void {
    this.contentService.startTimers()
  }
  ngOnDestroy() {
    this.contentService.destroyTimers();
  }


}
