import { Component, OnInit } from '@angular/core';
import { Curso } from '../Classes/Curso';
import { Catedratico } from '../Classes/Catedratico';
import { CursoCatedratico } from '../Classes/CursoCatedratico';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})

export class NuevaPublicacionComponent implements OnInit {
  mensaje: string;
  //usuario: Usuario;
  cursos: Curso[];
  catedraticos: Catedratico[];
  cursoCatedraticos: CursoCatedratico[];
  display: string;
  index: string;
  errorMensaje: string;

  constructor(private publicacion:PublicacionService) { 
    this.mensaje = "";
    this.errorMensaje = "";
    //this.usuario = new Usuario();
    //Usuario provisional, debe venir del login y pasarlo como parámetro al constructor
    this.cursos = [];
    this.catedraticos = [];
    this.cursoCatedraticos = [];
    this.display = "1";
    this.index = "0";
  }

  changeDisplay(numero: string){
    this.display = numero;
    if(this.display == "1"){
      this.getCursos()
    }else if(this.display == "2"){
      //getCatedraticos()
    }else if(this.display == "3"){
      //getCursoCatedraticos()
    }
  }

  changeIndex(index: string){
    this.index = index;
  }

  ngOnInit(): void {
    /*this.cursos.push(new Curso(1, "Prácticas Iniciales"));
    this.cursos.push(new Curso(2, "Prácticas Iniciales"));
    this.catedraticos.push(new Catedratico(1, "Sergio", "Gómez Bravo"));
    this.cursoCatedraticos.push(new CursoCatedratico(1, new Curso(1, "Prácticas Iniciales"), new Catedratico(1, "Sergio", "Gómez Bravo")))*/
    this.getCursos()
  }

  getCursos(): void{
    var arreglo: Curso[] = [];
    this.publicacion.getCursos().subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    )
    /*let x = [{codigoCurso: 771, nombre: "IPC2"}, {codigoCurso: 770, nombre: "IPC1"} ]
    for (let y of x){
      arreglo.push(new Curso(y.codigoCurso, y.nombre))
    };
    this.cursos = arreglo;
    console.log(this.cursos);*/
  } //Obtener de BD, guardar cada registro como objeto de la clase Curso 
  

  getCatedraticos(){} //Obtener de BD, guardar cada registro como objeto de la clase Catedratico
  
  getCursoCatedraticos(){} //Obtener de la BD, guardar cada registro como objeto de la clase CursoCatedrático

  publicar(){
    if(this.mensajeValido()){
      this.errorMensaje = "";
      //Guardar en BD
    }else{
      this.errorMensaje = "Aún no has escrito ningún mensaje.";
    }
  }

  quitarError(){
    this.errorMensaje = "";
  }

  mensajeValido(){
    if(this.mensaje != ""){
      return true;
    }else{
      return false;
    }
  }
}
