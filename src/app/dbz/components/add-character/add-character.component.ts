import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  /**
   * *Propiedad onNewCharacter en la cual podremos emitir datos
   */

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    if (this.character.name.length === 0) return;
    /**
     * *Validacion para ver si es que el campo nombre tiene algo
     */

    this.onNewCharacter.emit(this.character);
    /**
     * *añadimos a la propiedad onNewCharacter el dato que queremos emitir
     */

    this.character = { name: '', power: 0 };
  }
}
