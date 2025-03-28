import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increment(1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increment(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  constructor() { }
  increment(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}
