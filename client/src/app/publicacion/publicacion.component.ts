import { Comentario } from '../nodes/comentario';
import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion';
import { PublicacionService } from '../services/publicacion.service';
import { Carnet } from '../nodes/Carnet';
import { HttpParams } from '@angular/common/http'
import { stringify } from 'querystring';

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

  constructor(private publicacionService: PublicacionService) { }

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
    let cadena: string = " ";
    /*let carnetNuevo: Carnet={
      carnet: this.publicacion.carnet.toString()
    }
    cadena = this.getNombresApellidos(carnetNuevo);
    console.log(cadena);
    return cadena;*/
  }

  getNombresApellidos(carnet: Carnet){
    let cadena: string;
    this.publicacionService.getUsuario(carnet).subscribe(
      res=>{console.log(res)
        cadena = res[0].nombres + res[0].apellidos;
      },err=>{console.log(err)
      }
    );
    return cadena;
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
