import { Component, signal } from '@angular/core';


@Component({
    selector: 'contador-component',
    standalone:true,
    templateUrl: './contador.component.html',
})

export class ContadorComponent {

  contador = signal(10);
  nombre = signal("PABLO");

  aumentarContador():void{
    this.contador.update(v => v + 1);
  }
  
  decrementarContador(){
    this.contador.update(v => v -1);
  }

  restarContador(){
    this.contador.set(0);
  }
  
}