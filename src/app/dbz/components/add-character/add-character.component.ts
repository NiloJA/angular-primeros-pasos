import { Component, EventEmitter, Output } from '@angular/core';
import { Chararter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Chararter> = new EventEmitter();

  public character: Chararter = {
    name: '',
    power: 0
  };

  emiCharacter(): void {

    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 };
  }
}
