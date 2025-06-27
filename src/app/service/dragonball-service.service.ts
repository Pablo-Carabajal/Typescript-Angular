import { effect, Injectable, signal } from '@angular/core';
import { Caracter } from '../interface/caracter-interface';

function addLocalStorage():[] {
const localStorageObj = localStorage.getItem("personajes");

if( localStorageObj !== null){
  
  return JSON.parse(localStorageObj);
}else{
  return [];
}
}


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  caracter = signal<Caracter[]>(addLocalStorage());

  effectDragonballSave = effect(()=>{
    localStorage.setItem("personajes",JSON.stringify(this.caracter()));
  })

  addPersonaje(personaje:Caracter){
   this.caracter.update((list => [...list,personaje]));
  }
  
}
