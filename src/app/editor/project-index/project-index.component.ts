import { Component, OnInit } from '@angular/core';
import {ProjectManagerService} from "../../core/services/project-manager/project-manager.service";
import {Router} from "@angular/router";

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
}
