import { Component, OnInit } from '@angular/core';
import { Comentario } from '../nodes/comentario';

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
}
