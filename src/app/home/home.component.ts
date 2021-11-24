import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectManagerService} from "../core/services/project-manager/project-manager.service";
import {AppConfig} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  environment = AppConfig.environment
  version = AppConfig.version

  constructor(private router: Router, private projectManager: ProjectManagerService) { }

  ngOnInit(): void { }

    openProject() {
    this.projectManager.openProject();
    }

    newProject() {
      this.projectManager.newProject();
      this.router.navigate(['editor/']);
    }
}
