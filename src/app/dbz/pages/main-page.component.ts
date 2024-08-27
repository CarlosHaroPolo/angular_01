import { Component  } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

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
