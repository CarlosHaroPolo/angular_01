import { Component } from '@angular/core';

@Component({   // es un decorador qyue trasforma mi clase  a que sea un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Mi primera app de angular';
public counter: number =3;


 increaseBy( value:number):void{
  this.counter +=value ;
}
reset():void {
this.counter = 10;
}


}
