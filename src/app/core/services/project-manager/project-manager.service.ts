import { Injectable } from '@angular/core';
import {Session} from "../../../interfaces/sessions/session";
import {Settings} from "../../../interfaces/file/settings.interface";
import {ElectronService} from "../electron/electron.service";
import {Router} from "@angular/router";

import * as yaml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  projectData: Settings;

  nextAction: string;

  saveContent: Session;

  inEditor: boolean = false;

  baseDir: string = "";
  saveDir: string = "";

  constructor(
    public electronService: ElectronService,
    public router: Router
  ) { }

  openProject() {
    let ret = this.electronService.dialog.showOpenDialogSync(
        {
          properties: ['openFile'],
          filters: [{ name: 'Settings Files', extensions: ['yml'] }],
          message: 'Select the settings.yml file of your project.'
        }
    )

    if(ret[0].search("settings.yml") === -1){
      alert("This is not a settings file for Fractal. The file must be named settings.yml");
      window.location.href = "/";
      throw new Error("Fractal Settings Name is Incorrect.")
    }

    this.projectData = yaml.load(this.electronService.fs.readFileSync(ret[0], 'utf8')) as Settings;

    this.baseDir = ret[0].replace("/settings.yml", "");

    this.saveContent = null;
    this.inEditor = false;
    this.nextAction = "home";

    this.router.navigate(['editor/']);

  }

  newProject() {


    // make the user choose a location for the project to be saved to.

    let ret = this.electronService.dialog.showOpenDialogSync(
        {
          properties: ['openDirectory','createDirectory'],
          message: 'Select a location for your project to be located.'
        }
    )

    this.baseDir = ret[0];

    this.projectData = {
      name: "Unnamed Project",
      description: "",
      subjectName: "Subject",
      lastSaved: "Never",
      sessions: [],
    } as Settings;
    this.saveContent = null;
    this.inEditor = false;
    this.nextAction = "home";

    this.checkFolderCreated(this.baseDir);

  }

  checkFolderCreated(location: string){

    // folder created successfully, make sure subdirs are created
    try {
      this.electronService.fs.mkdirSync(this.baseDir+'/images');
      this.electronService.fs.mkdirSync(this.baseDir+'/media');
    }catch (e){
      alert("Directory already has nessesary files in it. If this is an existing project, select Open.");
      this.nextAction = "mainmenu";
      window.location.href = "/";
    }


  }

  initSave(){
    this.electronService.fs.writeFileSync(this.baseDir+'/settings.yml', yaml.dump(this.projectData))
  }
  initSaveAs(){

  }




}
