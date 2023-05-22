import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimingService {

  constructor() { }

  getTimer(): Observable<number> {

    return interval(1000);

  }

}
