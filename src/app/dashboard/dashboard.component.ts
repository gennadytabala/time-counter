import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { Counters } from '../counters';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  counters: Counters = {};
  constructor(private dashboardService: DashboardService) { };

  ngOnInit() {
    this.dashboardService.get().subscribe(counters => this.counters = counters);
  }

}
