import { Component } from '@angular/core';
import { Counter } from '../counter';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  counters: Counter[] = [];

  constructor(private dashboardService: DashboardService) { };

  ngOnInit() {
    this.dashboardService.get().subscribe(counters => this.counters = counters);
  }

}
