import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/internal/operators/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-counter';
  openSettings = false;
  haveUpdate = false;


  constructor(private updates: SwUpdate) { }

  turnSettings() {
    this.openSettings = !this.openSettings;
  }

  ngOnInit() {
    this.haveUpdate = false;
    this.updates.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(evt => {
        console.log(evt);
        document.location.reload()
      })
  }

}
