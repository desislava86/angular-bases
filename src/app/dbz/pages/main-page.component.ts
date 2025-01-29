import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor(private dbzService: DBZService ) {}

get characters(): Character[] {
  return [...this.dbzService.characters]; // copia del objeto
}

onDeleteCharacter(id: string) : void {
 this.dbzService.onDeleteCaracterById(id);
}

onNewCharacter(character: Character): void {
  this.dbzService.addCharacter(character);
}

}
