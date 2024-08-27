import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDelete:EventEmitter<number> = new EventEmitter();







  @Input() // traes la inforamacion del padre pero borras la informacion del padre
  public characterList :Character[]=[{
    name: 'trunks',
    power:10
  }]

  onDeleteCharacter(id:number):void{
      //TODO:Emitir el id del personaje
      console.log(id);
      this.onDelete.emit(id);

  }

}
