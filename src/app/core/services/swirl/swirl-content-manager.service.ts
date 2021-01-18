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


  public loadedSession: SpiralSession | GuidedSpiralSession | RandomSpiralSession;

  public activeLine: Line;

  public files: string[] = [];

  public lineTimerFunc: any;

  constructor(session: SpiralSession | GuidedSpiralSession | RandomSpiralSession | null = null) {
    if(session === null){
      this.loadedSession = {
        lines: {
          lines: [{words: "enter your spiral text here"}]
        },
        textColor: "\#000000",
        title: 'Unsaved Session',
        files: [],
        images: [],
      } as RandomSpiralSession;
    }else{
      this.loadedSession = session;
    }
  }

  public startTimers(){
    this.lineTimerFunc = setInterval(() => {
      this.activeLine = this.loadedSession.lines.lines[Math.floor(Math.random() * this.loadedSession.lines.lines.length)];
    },500);
  }

  public destroyTimers() {
    clearInterval(this.lineTimerFunc);
    console.log("Destroyed timers");
  }

}
