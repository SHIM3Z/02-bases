import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {


  @Input()
  public characterlist: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  /**
   * *Propiedad para emitir datos
   */

  onDeleteCharacter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
    /**
     * *Tomamos la propiedad y la añadimos el dato que queremos emitir
     */
  }



}
