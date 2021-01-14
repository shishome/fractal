import { Injectable } from '@angular/core';
import {LineList} from '../../../interfaces/swirl/line-list';
import {Line} from '../../../interfaces/swirl/line';

@Injectable({
  providedIn: 'root'
})
export class SwirlContentManagerService {

  public sessionLines: LineList;
  public activeLine: Line;

  public textColor: string = "\#000000";
  public images: string[] = [];

  public lineTimerFunc: any;

  constructor() {
    this.sessionLines = {
      lines: [
        {words: 'test1'},
        {words: 'test2'},
        {words: 'test3'},
        {words: 'test four'},
      ]
    };
  }

  public startTimers(){
    this.lineTimerFunc = setInterval(() => {
      this.activeLine = this.sessionLines.lines[Math.floor(Math.random() * this.sessionLines.lines.length)];
    },500);
  }

  public destroyTimers() {
    clearInterval(this.lineTimerFunc);
    console.log("Destroyed timers");
  }

}
