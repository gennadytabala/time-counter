import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  counters: Counter[] = [];
  constructor(private dashboardService: DashboardService) { };

  ngOnInit() {
    this.dashboardService.get().subscribe(counters => this.counters = counters);
  }

}
