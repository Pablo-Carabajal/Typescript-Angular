import {  Component, input } from '@angular/core';
import { Caracter } from '../../../interface/caracter-interface';

@Component({
  selector: 'dragonball-listado',
  standalone: true,
  imports: [],
  templateUrl: './dragonball-listado.component.html',
  
})
export class DragonballListadoComponent {
  titulo = input.required<string>();
  caracter = input.required<Caracter[]>(); 
 }
