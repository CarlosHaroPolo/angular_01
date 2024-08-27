import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 public heroNames: String[] =['spiderman','ironman','hulk','she hulk','Thor'];
public deletedHero?:String;

 removeLastHero():void{
  this.deletedHero = this.heroNames.pop();
 }
}

