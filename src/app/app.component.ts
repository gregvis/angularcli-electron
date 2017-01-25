import { Component } from '@angular/core';
const remote = require('electron').remote;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    remote.dialog.showOpenDialog({ title: 'Electron Works!' });
  }
}

