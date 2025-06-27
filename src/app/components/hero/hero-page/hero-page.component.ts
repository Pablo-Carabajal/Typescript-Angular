import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [UpperCasePipe,RouterOutlet],
  templateUrl: './hero-page.component.html',
 
})
export class HeroPageComponent {
   name = signal("Ironman");
   age = signal(45);

   getHeroDescription():string{
     return this.name() +" "+this.age();
   }

   changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
   }

   resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
   }
   changeAge(){
    this.age.set(60);
   }
  }
