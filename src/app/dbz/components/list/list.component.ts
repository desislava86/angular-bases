import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() public characterList: Character[] = [{
    name: 'Thrunk',
    power: 10
  }];
  @Output() emitDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCaracter(id: string):void {
    // TODO emitir el ID del personaje

    //if (!id) return;

    console.log({id});

    this.emitDelete.emit(id);
  }

  // onDelete(index: number): void {

  //   this.emitDelete.emit(index);
  // }
 }
