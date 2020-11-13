import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion'
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()carnet: number
  publicaciones: Publicacion[];
  display: number;

  constructor(private publicacion: PublicacionService) { }

  ngOnInit(): void {
    this.publicaciones = [];
    this.display = 0;
    this.getPublicaciones();
  }

  getPublicaciones(){
    let nuevoArray: Publicacion[]=[]

    this.publicacion.getPublicacion().subscribe(
      res=>{console.log(res);
        let publicaciones = JSON.parse(JSON.stringify(res));

        for (let i=publicaciones.length - 1 ; i >= 0 ; i--) {

          switch(res[i].tipo){
            case 1:
              nuevoArray.push(new Publicacion(res[i].idPublicacion, res[i].mensaje, res[i].fecha.split("T",1)[0], res[i].tipo, res[i].usuario_carnet, res[i].curso_CodigoCurso));
              break;
            case 2:
              nuevoArray.push(new Publicacion(res[i].idPublicacion, res[i].mensaje, res[i].fecha.split("T",1)[0], res[i].tipo, res[i].usuario_carnet, res[i].catedratico_NoCatedratico));
              break;
            case 3:
              nuevoArray.push(new Publicacion(res[i].idPublicacion, res[i].mensaje, res[i].fecha.split("T",1)[0], res[i].tipo, res[i].usuario_carnet, res[i].curso_Catedratico_idCatedraticoCurso));
              break;
            case 4:
              nuevoArray.push(new Publicacion(res[i].idPublicacion, res[i].mensaje, res[i].fecha.split("T",1)[0], res[i].tipo, res[i].usuario_carnet, res[i].auxiliar_idAuxiliar));
              break;
            case 5:
              nuevoArray.push(new Publicacion(res[i].idPublicacion, res[i].mensaje, res[i].fecha.split("T",1)[0], res[i].tipo, res[i].usuario_carnet, res[i].auxiliar_Curso));
              break;
          }
        }
      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.publicaciones = nuevoArray;
  }

  changeDisplay(numero: number){
    this.display = numero;
    if(numero == 0){
      this.getPublicaciones();
    }
  }

}
