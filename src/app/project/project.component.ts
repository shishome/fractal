import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SwirlContentManagerService} from "../core/services/swirl/swirl-content-manager.service";
import {Line} from "../interfaces/swirl/line";

@Component({
  selector: 'app-detail',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  sure: string = "/home";
  editField: string;

  constructor(private route: ActivatedRoute, public contentManager: SwirlContentManagerService) {
    let id=this.route.snapshot.params['method'];
    console.log(id);
    if(id === "new"){
      console.log("Rendering a blank project...");
      this.contentManager = new SwirlContentManagerService();
    }
  }

  ngOnInit(): void { }

  updateList(id: number, event: any) {
    const editField = event.target.textContent;
    this.contentManager.sessionLines.lines[id].words = editField;
  }

  remove(id: any) {
    this.contentManager.sessionLines.lines.splice(id, 1);
  }

  add() {
      this.contentManager.sessionLines.lines.push({words: "new line"});
  }

  changeValue(id: number, event: any) {
    this.editField = event.target.textContent;
  }

    duplicate(line: Line) {
        this.contentManager.sessionLines.lines.push(line);
    }
}
