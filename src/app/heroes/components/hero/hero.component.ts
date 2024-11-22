import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  get capitaizedName(): string {
    return this.name.toUpperCase();
  }
  /**
   * *Esto es una propiedad
   * *PAra ver el retorno no es necesario parentesis
   */

  getheroDescription(): string{
    return `${this.name} - ${this.age}`;
  }
  /**
   * *Esto es un metodo
   * *para ver la info de retorno se necesita parentesis
   */

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  restartHero():void {
    this.name = 'ironMan';
    this.age = 45;
  }

}
