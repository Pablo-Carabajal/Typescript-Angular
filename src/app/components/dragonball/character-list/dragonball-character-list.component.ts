import {  Component, input } from '@angular/core';
import type { Caracter } from '../../../interface/caracter-interface';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  imports: [],
  templateUrl: './dragonball-character-list.component.html',
  
})
export class DragonBallCharacterListComponent {
caracter = input.required<Caracter[]>();

}
