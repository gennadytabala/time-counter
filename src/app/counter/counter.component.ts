import { Component, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter?: Counter;
}
