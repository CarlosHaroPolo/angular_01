import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})


export class AddCharacterComponent {

public character:Character;

//HIJO
@Output()
//este es el nombre de la propiedad
onNewCharacter :EventEmitter<Character>= new EventEmitter();

constructor(){
  // inicializas el caracter
  this.character={
    // ademas se va ver reflezado el cambio en html
     name:'sddasdsad',
     power:0
  }
}



emitCharacter():void{

  if (this.character.name.length ===0 ) return ;
  //this.onNewCharacter.emit(this.character);
  this.onNewCharacter.emit({ ...this.character });
this.character.name = ""
this.character.power=0;

                      //esta es la salida que emite el evento
  //vamos a limpiar los valores

}




}
