import { Comentario } from '../nodes/comentario';
import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion';

@Component({
  selector: 'publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  comentario: string;
  usuario: number = 201900955;
  mostrar: Boolean = false;
  mostrarLista: Boolean = false;
  @Input() publicacion: Publicacion; 

  constructor() { }

  ngOnInit(): void {
  }
  mostrarOcultar(){
    if (this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }

  listaComentarios() {
    if (this.mostrarLista){
      this.mostrarLista = false;
    }else{
      this.mostrarLista = true;
    }
  }

  addComentario(){
    let comentario: Comentario={
      carnet: 201900955,
      mensaje: this.comentario,
      idPublicacion: 1
    }
    console.log(comentario)
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
