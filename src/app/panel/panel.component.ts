import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  counters: Counter[] = []

  ngOnInit() {
    this.counters.push({ name: "work", period: 0 });
    this.counters.push({ name: "chill", period: 0 });
  }

}
