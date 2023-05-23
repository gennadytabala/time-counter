import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-counter';
  openSettings = false;

  turnSettings() {
    this.openSettings = !this.openSettings;
  }

}
