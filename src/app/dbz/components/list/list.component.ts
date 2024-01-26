import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chararter } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Chararter[] = [
    {

      name: 'Trunks',
      power: 10
    }
  ];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); // subcribirse

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    // TODO Emitir el ID del personaje
    this.onDelete.emit(id);
  }

}
