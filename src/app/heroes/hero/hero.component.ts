import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name:string ="Ironman";
public age: number =45;

editName():void{
this.name ="perro"
}
editAge():void {
this.age = 30;
}

get capitalizedName():string{   // se utiliza como propiedad
  return this.name.toUpperCase();
}

getHeroDescription():string{ // se utiliza como metodo
return `${this.name}-${this.age}`;
}



}
