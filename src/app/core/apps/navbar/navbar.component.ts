import { Component, OnInit } from '@angular/core';
import {ProjectManagerService} from "../../services/project-manager/project-manager.service";
import {Router} from "@angular/router";
import {ElectronService} from "../../services";

@Component({
  selector: 'fractal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
      public projectManager: ProjectManagerService,
      public router: Router,
      public electronService: ElectronService
  ) { }

  ngOnInit(): void {
  }


    goToMenu() {
        this.projectManager.nextAction = "home";
        this.projectManager.saveContent = null;
        this.router.navigate(["/editor"]);
    }
}
