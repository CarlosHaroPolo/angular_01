import {  Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn:'root'})
export class ServiceNameService {

//ahora quiero añadir
public characters:Character[]=[
  {
    name:'Krillin',
    power:1000
  },
  {
    name:'Goku',
    power:9500
  }
];
//PADRE FUNCION
onNewCharacter(character :Character):void{
console.log(character)
this.characters.push(character);
}
onDeleteCharacter(id:number):void{
  this.characters.splice(id,1);
}




}
