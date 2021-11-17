import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {SwirlContentManagerService} from '../core/services/swirl/swirl-content-manager.service';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {ProjectManagerService} from "../core/services/project-manager/project-manager.service";

@Component({
  selector: 'app-swirl',
  templateUrl: './swirl.component.html',
  styleUrls: ['./swirl.component.css'],
  animations: [
    trigger('fade', [
      transition('void => active', [ // using status here for transition
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SwirlComponent implements OnInit, OnDestroy {

  constructor(public contentService: SwirlContentManagerService, private router: Router, public projectManager: ProjectManagerService) { }

  ngOnInit(): void {
    this.contentService.startTimers()
    this.contentService.activeLine = {words: 'Loading...'};
    console.log(this.contentService.loadedSession);
  }
  ngOnDestroy() {
    this.contentService.destroyTimers();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'q'){
      this.router.navigate(['/editor/spiral-ui']);
    }
  }

  timeout(): boolean {
    return true;
  }
}
