import { Injectable } from '@angular/core';
import {LineList} from '../../../interfaces/swirl/line-list';
import {Line} from '../../../interfaces/swirl/line';
import {SpiralSession} from "../../../interfaces/sessions/spiral-session";
import {GuidedSpiralSession} from "../../../interfaces/sessions/guided-spiral-session";
import {RandomSpiralSession} from "../../../interfaces/sessions/random-spiral-session";

@Injectable({
  providedIn: 'root'
})
export class SwirlContentManagerService {


  public loadedSession: SpiralSession;

  public activeLine: Line;

  public files: string[] = [];

  public lineTimerFunc: any;

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
        images: [],
        uniqueId: ''
      } as RandomSpiralSession;
    }else{
      this.loadedSession = session;
    }
  }

  constructor() {

  }

  public startTimers(){
    this.lineTimerFunc = setInterval(() => {
      console.log(this.loadedSession.lines)
      this.activeLine = this.loadedSession.lines.lines[Math.floor(Math.random() * this.loadedSession.lines.lines.length)];
    },500);
  }

  public destroyTimers() {
    clearInterval(this.lineTimerFunc);
    console.log("Destroyed timers");
  }

}
