import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {

  counters$!: Observable<Counter[]>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.counters$ = this.dashboardService.get();
  }


}
