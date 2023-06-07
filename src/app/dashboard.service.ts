import { Injectable } from '@angular/core';
import { Counter } from './counter';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  counters: Counter[];

  constructor() {
    this.counters = [
      { name: 'work', period: 0 },
      { name: 'chill', period: 0 }
    ];
  }

  add(counter: Counter): void {
    const counterUpdated = this.counters.find(item => item.name == counter.name);

    if (counterUpdated) {
      counterUpdated.period += counter.period;
    } else {
      this.counters.push(counter);
    }
  }

  get(): Observable<Counter[]> {
    return of(this.counters);
  }

  delete(name: string): void {
    const index = this.counters.findIndex(item => item.name === name)
    if (index === -1) {
      return;
    }
    this.counters.splice(index, 1);
  }
}
