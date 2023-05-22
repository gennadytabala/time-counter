import { Injectable } from '@angular/core';
import { Counter } from './counter';
import { Observable, of } from 'rxjs';
import { Counters } from './counters';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  counters: Counters = {};

  constructor() { }

  add(counter: Counter): void {
    if (!this.counters[counter.name]) {
      this.counters[counter.name] = 0;
    }
    this.counters[counter.name] += counter.period;
  }

  get(): Observable<Counters> {
    return of(this.counters);
  }
}
