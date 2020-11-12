import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion';

@Component({
  selector: 'publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion: Publicacion; 

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(){
    //Aquí metan la query que devuelva el nombre del usuario del carnet de la publicacion
  }

  getTitle(){
    switch(this.publicacion.tipo){
      case 1:
        //query que devuelve los datos para crear objeto Curso
        break;
      case 2: 
      //query que devuelve los datos para crear objeto Catedratico
        break;
      case 3:
        //query que devuelve los datos para crear objeto CursoCatedratico
        break;
      case 4:
        //query que devuelve los datos para crear objeto Auxiliar
        break;
      case 5:
        //query que devuelve los datos para crear objeto CursoAuxiliar
        break;
    }
  }

}
