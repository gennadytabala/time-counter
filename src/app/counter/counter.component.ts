import { Component, Input } from '@angular/core';
import { Counter } from '../counter';
import { TimingService } from '../timing.service';
import { Observable, Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter?: Counter;
  timerStarted = false;

  timer$: Subscription | null = null;

  constructor(
    private timingService: TimingService,
    private dashboardService: DashboardService) { };

  turnTimer() {
    if (this.timerStarted) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer(): void {
    this.timer$ = this.timingService.getTimer().subscribe(n => {
      if (this.counter) {
        this.counter.period = n;
        this.timerStarted = true;
      }
    });
  }

  stopTimer(): void {
    this.timer$?.unsubscribe();
    this.timerStarted = false;

    if (this.counter) {
      this.dashboardService.add(this.counter);
      this.counter.period = 0;
    }
  }

}
