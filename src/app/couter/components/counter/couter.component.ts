import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-couter',
  template: `<h1>Hola Couter</h1>

  <h3> Counter: {{ couter }}</h3>

 <button type="submit"  (click)="increasBy(+1)">+1</button>
 <button type="submit"  (click)="increasBy(-1)">-1</button>

 <button type="submit"  (click)="resteValue()">Reset</button>
  `,
  standalone: false,
})

export class CouterComponent implements OnInit {

  constructor() { }

  public couter: number = 10;

  increasBy(value: number): void {
    this.couter += value;
  }

  resteValue(): void{
   this.couter = 10;
  }

  ngOnInit() { }
}
