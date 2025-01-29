import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';



@Injectable({
    providedIn: 'root'

  })
export class DBZService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilim',
    power: 100
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
}];


addCharacter(character: Character): void {
  // const newCharacter:Character =  {
  //   id: uuid(),
  //   name: character.name,
  //   power: character.power
  // }
// en ver de hacer destructuración,crear un nuevo objeto donde el id hay que calcularo y el resto duplicarlo
  const newCharacter: Character = {...character, id: uuid()};
  this.characters.push(newCharacter);

}

// onDeleteCaracter(index: number): void {
//  this.characters.splice(index, 1);
// }
onDeleteCaracterById(id:  string): void {
 this.characters = this.characters.filter( char => char.id !== id);

}

}
