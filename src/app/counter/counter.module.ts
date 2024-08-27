import { CounterComponent } from "./components/counter/counter.component";
import { NgModule } from "@angular/core";


@NgModule({
  declarations:[
       CounterComponent
  ],
  // le estas diciendo al mundo que pueden utilizar los modulos
  exports:[
    CounterComponent
  ]
})
export  class CounterModule
{

}
