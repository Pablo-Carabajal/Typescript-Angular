import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragonBallCharacterListComponent } from "../dragonball/character-list/dragonball-character-list.component";
import type { Caracter } from '../../interface/caracter-interface';

@Component({
  selector: 'app-dragonball-page-super',
  standalone: true,
  imports: [FormsModule, DragonBallCharacterListComponent],
  templateUrl: './dragonball-page-super.component.html',
})
export class DragonballPageSuperComponent {

  caracter = signal<Caracter[]>([
    {id:1,nombre:"Goku",power:9001},
    {id:2,nombre:"Vegeta",power:8001},
    {id:3,nombre:"Piccolo",power:5001}
  ]);

  nombre= signal("Nombre del personaje");
  numero = signal(0);

  agregarPersonaje(){

      if(!this.nombre() || !this.numero() || this.numero() <= 0){
      return;
    }

   const nuevoPersonaje:Caracter ={
    id:this.caracter.length + 1,
    nombre: this.nombre(),
    power:this.numero()
   }

   this.caracter.update(val => [...val,nuevoPersonaje]);
   this.resetPersonajes();
  }

  resetPersonajes(){
    this.nombre.set("Nombre del Personaje");
    this.numero.set(0);
  }
 
}
