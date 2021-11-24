import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, dialog, app } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  app: typeof app;
  childProcess: typeof childProcess;
  fs: typeof fs;
  path: typeof path;
  dialog: typeof dialog;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    console.log(this.isElectron);
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;

      this.dialog = window.require('@electron/remote').dialog;

      // If you want to use remote object, please set enableRemoteModule to true in main.ts
      this.app = window.require('electron').app;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      this.path = window.require('path');

    }
  }
}
