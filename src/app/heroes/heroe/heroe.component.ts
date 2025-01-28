import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  // es una propiedad-método
  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {

    this.name = 'Mecho puj';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
  }

}
