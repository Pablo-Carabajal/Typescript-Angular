import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragonballListadoComponent } from '../dragonball-list/dragonball-listado/dragonball-listado.component';
import { DragonballCharacterAddComponent } from '../dragonball-character-add/dragonball-character-add.component';
import { DragonballService } from '../../service/dragonball-service.service';


@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [FormsModule,DragonballListadoComponent,DragonballCharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  
})
export class DragonballPageComponent {

  titulo = signal<string>("Listado de Personajes Débiles")

  dragonballService = inject(DragonballService);
    
}
