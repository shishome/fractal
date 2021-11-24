import { Component, OnInit } from '@angular/core';
import {ProjectManagerService} from "../../core/services/project-manager/project-manager.service";
import {Router} from "@angular/router";
import {Session} from "../../interfaces/sessions/session";

@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.scss']
})
export class ProjectIndexComponent implements OnInit {

  constructor(public projectManager: ProjectManagerService, public router: Router) {

  }

  ngOnInit(): void {
    if(this.projectManager.projectData === undefined){
      this.router.navigate(["/"]);
    }
  }

    newSessionRandom() {
        this.projectManager.nextAction = 'new'
        this.projectManager.inEditor = true;
      this.router.navigate(["/editor/spiral-ui"])
    }

    openSession(type: string, session: Session) {
        switch(type){
          case 'rss':
            this.projectManager.nextAction = 'load';
            this.projectManager.saveContent = session;
            this.projectManager.inEditor = true;
            this.router.navigate(["/editor/spiral-ui"])
            break;
        }
    }
}
