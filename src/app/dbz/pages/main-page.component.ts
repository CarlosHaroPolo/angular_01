import { Component  } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{


//La inyección de dependencia implica pasar objetos a una clase, en lugar de permitir que una clase cree objetos internamente. Esto significa que la creación y la gestión de los objetos dependientes se externalizan a un agente externo (el sistema de inyección de dependencias).
// la inyeccion en agular se hace mediante el constructor
constructor(private dbzService :DbzService){
   //esto me va  habilitar toda la informacion del servicio

   //ahora vamos a tabjar con servidor private para eso tenemos volverolo privado
   // para acceder a su infomrcion va ser por metodos
    }

    get characters():Character[]{
      return [...this.dbzService.characters] // le estas diciendo que vas ahcer una copia y va a recortar Character
    }

     onDeleCharacter(id:String) :void{
       this.dbzService.deleteCharacterById(id)
    }
    onNewCharacter(Character:Character){
      this.dbzService.addCharacter(Character);
    }

}


