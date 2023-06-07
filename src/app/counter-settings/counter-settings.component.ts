import { Component, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './counter-settings.component.html',
  styleUrls: ['./counter-settings.component.css']
})
export class CounterSettingsComponent {
  @Input() name?: string;

  constructor(private dashboardService: DashboardService) { };

  delete(): void {
    if (this.name) {
      this.dashboardService.delete(this.name);
    }
  }

}
