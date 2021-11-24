import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SwirlContentManagerService} from "../../core/services/swirl/swirl-content-manager.service";
import {Line} from "../../interfaces/swirl/line";
import {ElectronService} from "../../core/services";
import {ProjectManagerService} from "../../core/services/project-manager/project-manager.service";
import {SpiralSession} from "../../interfaces/sessions/spiral-session";

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
      public projectManager: ProjectManagerService,
      public router: Router
  ) {
    let action = projectManager.nextAction;
    console.log(action);
    if (action === "new") {
      console.log("Rendering a blank editor...");
      this.contentManager.loadSession(null);
    }
    if (action === "load") {
      console.log("Loading a session from memory")
      this.contentManager.loadSession(this.projectManager.saveContent as unknown as SpiralSession);
    }
  }

  ngOnInit(): void {
    if (this.contentManager.loadedSession === undefined) {
      this.projectManager.nextAction = "main-menu";
      this.router.navigate(["/editor"])
    }
  }

  updateSaveContent() {
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
            {name: 'Images', extensions: ['jpg', 'png', 'gif', 'jpeg']}
          ],
          message: 'Choose files to import into the editor.'
        }
    ).then((obj) => {
      for (let i = 0; i < obj.filePaths.length; i++) {

        this.contentManager.addCopyFileToImages(obj.filePaths[i]);

        //this.contentManager.files.push(obj.filePaths[i]);
      }
      this.updateSaveContent();
    })
  }

  removeFile(id: number) {
    this.contentManager.loadedSession.files.splice(id, 1);
    this.updateSaveContent();
  }

  duplicateFile(line: string) {
    this.contentManager.loadedSession.files.push(line);
    this.updateSaveContent();
  }

  runSession() {

    this.projectManager.nextAction = "run-swirl";
    this.router.navigate(["swirl/"]);

  }

  saveSession() {
    let found = false;
    for (let i = 0; i < this.projectManager.projectData.sessions.length; i++) {
      if (this.projectManager.saveContent.uniqueId === this.projectManager.projectData.sessions[i].uniqueId) {
        this.projectManager.projectData.sessions[i] = this.projectManager.saveContent
        found = true;
      }
    }

    if(!found){
      this.projectManager.projectData.sessions.push(this.projectManager.saveContent);
    }

    this.projectManager.initSave();

  }
}
