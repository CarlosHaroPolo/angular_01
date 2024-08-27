import {  Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import {v4 as uuid }from 'uuid';  // este es una funcion  uuid

@Injectable({providedIn:'root'})
export class DbzService {

//ahora quiero añadir
public characters:Character[]=[
  {
    id:uuid(),  // ahora tiene su identicador unico
    name:'Krillin',
    power:1000
  },
  {
    id:uuid(),
    name:'Goku',
    power:9500
  }
];
//PADRE FUNCION
addCharacter( Character:Character):void{

const newCharacter: Character ={id:uuid(),...Character}; // le dices a qui tines que sobreescribir
this.characters.push(newCharacter);
}

//  this.characters.splice(id,1);
//onDeleteCharacter
deleteCharacterById(id: String): void {
  this.characters = this.characters.filter(character => character.id !== id);
}



}
