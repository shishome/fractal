import { Component, OnInit } from '@angular/core';
import {ProjectManagerService} from "../../services/project-manager/project-manager.service";

@Component({
  selector: 'fractal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
      public projectManager: ProjectManagerService
  ) { }

  ngOnInit(): void {
  }


}
