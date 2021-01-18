import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SwirlContentManagerService} from "../../core/services/swirl/swirl-content-manager.service";
import {Line} from "../../interfaces/swirl/line";
import {ElectronService} from "../../core/services";
import {ProjectManagerService} from "../../core/services/project-manager/project-manager.service";

@Component({
  selector: 'app-detail',
  templateUrl: './spiral-ui.component.html',
  styleUrls: ['./spiral-ui.component.scss']
})
export class SpiralUiComponent implements OnInit {

  sure: string = "/home";
  editField: string;

  constructor(
      private route: ActivatedRoute,
      public contentManager: SwirlContentManagerService,
      public electronService: ElectronService,
      public projectManager: ProjectManagerService
  ) {
    let action = projectManager.nextAction;
    console.log(action);
    if(action === "new"){
      console.log("Rendering a blank editor...");
      this.contentManager = new SwirlContentManagerService();
    }
  }

  ngOnInit(): void { }

  updateSaveContent(){
    this.projectManager.saveContent = this.contentManager.loadedSession;
  }

  updateList(id: number, event: any) {
    const editField = event.target.textContent;
    this.contentManager.loadedSession.lines.lines[id].words = editField;
    this.updateSaveContent();
  }

  removeLine(id: any) {
    this.contentManager.loadedSession.lines.lines.splice(id, 1);
    this.updateSaveContent();
  }

  addLine() {
      this.contentManager.loadedSession.lines.lines.push({words: "new line"});
      this.updateSaveContent();
  }

  changeValue(id: number, event: any) {
    this.editField = event.target.textContent;
    this.updateSaveContent();
  }

    duplicateLine(line: Line) {
        this.contentManager.loadedSession.lines.lines.push(line);
      this.updateSaveContent();
    }

  addFiles() {
    this.electronService.dialog.showOpenDialog(
        {
          properties: ['openFile', 'multiSelections'],
          filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
          ],
          message: 'Choose files to import into the editor.'
        }
    ).then((obj) => {
      for (let i = 0; i < obj.filePaths.length; i++) {
        this.contentManager.files.push(obj.filePaths[i]);
      }
      this.updateSaveContent();
    })
  }

  removeFile(id: number) {
    this.contentManager.files.splice(id, 1);
    this.updateSaveContent();
  }

  duplicateFile(line: any) {
    this.contentManager.files.push(line);
    this.updateSaveContent();
  }
}
