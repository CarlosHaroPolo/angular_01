import { Component } from '@angular/core';

// Transforma mi clase en un componente
@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ counter }}</h2>
    <hr>
    <p>¿Cómo estás?</p>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 3;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
