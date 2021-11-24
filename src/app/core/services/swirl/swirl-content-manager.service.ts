import { Injectable } from '@angular/core';
import {LineList} from '../../../interfaces/swirl/line-list';
import {Line} from '../../../interfaces/swirl/line';
import {SpiralSession} from "../../../interfaces/sessions/spiral-session";
import {GuidedSpiralSession} from "../../../interfaces/sessions/guided-spiral-session";
import {RandomSpiralSession} from "../../../interfaces/sessions/random-spiral-session";
import {ElectronService} from "../electron/electron.service";
import {ProjectManagerService} from "../project-manager/project-manager.service";
import * as uuid from 'uuid';
import * as path from "path";

@Injectable({
  providedIn: 'root'
})
export class SwirlContentManagerService {


  public loadedSession: SpiralSession;

  public activeLine: Line;
  public activeImage: string;

  public lineTimerFunc: any;

  public imageTimerFunc: any;

  loadSession(session: SpiralSession | null = null){
    if(session === null){
      console.log("instantiating a new session")
      this.loadedSession = {
        lines: {
          lines: [{words: "enter your spiral text here"}]
        },
        textColor: "\#000000",
        title: 'Unsaved Session',
        files: [],
        uniqueId: uuid.v4(),
        type: 'rss'
      } as RandomSpiralSession;
    }else{
      this.loadedSession = session;
    }

    this.checkFoldersCreated();
  }

  constructor(
      public electronService: ElectronService,
      public projectManager: ProjectManagerService
  ) {

  }

  checkFoldersCreated(): boolean {

    let mediaDirectory = "/media/"+this.loadedSession.uniqueId+"/";
    let imageDirectory = "/images/"+this.loadedSession.uniqueId+"/";
    if (!this.electronService.fs.existsSync(this.projectManager.baseDir+mediaDirectory)){
      this.electronService.fs.mkdirSync(this.projectManager.baseDir+mediaDirectory)
    }
    if (!this.electronService.fs.existsSync(this.projectManager.baseDir+imageDirectory)){
      this.electronService.fs.mkdirSync(this.projectManager.baseDir+imageDirectory)
    }


    return true;
  }

  addCopyFileToImages(imagePath: string){
    let imageDirectory = "/images/"+this.loadedSession.uniqueId+"/";
    let fileName = this.electronService.path.basename(imagePath);
    try{
      this.electronService.fs.copyFileSync(imagePath, this.projectManager.baseDir+imageDirectory+fileName, this.electronService.fs.constants.COPYFILE_EXCL)
    }catch (e){
      throw new Error("File already exists, not adding.")
    }

      this.loadedSession.files.push(fileName);

  }

  public startTimers(){
    this.lineTimerFunc = setInterval(() => {
      //console.log(this.loadedSession.lines)
      this.activeLine = this.loadedSession.lines.lines[Math.floor(Math.random() * this.loadedSession.lines.lines.length)];
    },500);
    this.imageTimerFunc = setInterval(() => {
      this.activeImage = 'file:///'+this.projectManager.baseDir+'/images/'+this.loadedSession.uniqueId+'/'+this.loadedSession.files[Math.floor(Math.random() * this.loadedSession.files.length)];
    },300);
  }

  public destroyTimers() {
    clearInterval(this.lineTimerFunc);
    clearInterval(this.imageTimerFunc);
    console.log("Destroyed timers");
  }

}
