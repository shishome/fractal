import { Injectable } from '@angular/core';
import {Session} from "../../../interfaces/sessions/session";
import {Settings} from "../../../interfaces/file/settings.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  projectData: Settings;

  nextAction: string;

  saveContent: Session;

  inEditor: boolean = false;

  constructor(

  ) { }

  newProject() {
    this.projectData = {
      name: "Unnamed Project",
      description: "",
      subjectName: "Subject",
      lastSaved: "Never",
      sessions: []
    } as Settings;
    this.saveContent = null;
    this.inEditor = false;
    this.nextAction = "home";
  }





}
