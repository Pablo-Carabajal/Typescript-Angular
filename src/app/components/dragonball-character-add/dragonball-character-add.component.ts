import { Component, output, signal } from '@angular/core';
import type { Caracter } from '../../interface/caracter-interface';
import { DragonballPageComponent } from '../dragonball-page/dragonball-page.component';

@Component({
  selector: 'dragonball-character-add',
  standalone: true,
  imports: [DragonballPageComponent],
  templateUrl: './dragonball-character-add.component.html',
  
})
export class DragonballCharacterAddComponent {

nombre = signal("Nombre del Personaje"); 

numero = signal(0);

newPersonaje = output<Caracter>();


  agregarPersonaje(){

      if(!this.nombre() || !this.numero() || this.numero() <= 0){
      return;
    }

   const nuevoPersonaje:Caracter ={
    id:1000,
    nombre: this.nombre(),
    power:this.numero()
   }
  this.newPersonaje.emit(nuevoPersonaje);
  this.resetPersonajes();
  }

  resetPersonajes(){
    this.nombre.set("Nombre del Personaje");
    this.numero.set(0);
  }
}
