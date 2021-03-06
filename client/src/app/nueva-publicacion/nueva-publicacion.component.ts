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
      this.getCatedraticos()
    }else if(this.display == "3"){
      this.getCursoCatedraticos()
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
    let nuevoArray: Curso[]=[]
    this.publicacion.getCursos().subscribe(
      res=>{//console.log(res);
        let cursos = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < cursos.length ; i++) {
          nuevoArray.push(new Curso(res[i].codigoCurso, res[i].nombre));
        }

      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.cursos = nuevoArray;
  } //Obtener de BD, guardar cada registro como objeto de la clase Curso 
  

  getCatedraticos(): void{
    let nuevoArray: Catedratico[]=[]
    this.publicacion.getCatedraticos().subscribe(
      res=>{
        let catedraticos = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < catedraticos.length ; i++) {
          nuevoArray.push(new Catedratico(res[i].noCatedratico, res[i].nombres, res[i].apellidos));
        }

      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.catedraticos = nuevoArray;
  } //Obtener de BD, guardar cada registro como objeto de la clase Catedratico
  
  getCursoCatedraticos():void{
    let nuevoArray: CursoCatedratico[]=[]
    this.publicacion.getCursoCatedratico().subscribe(
      res=>{
        let catedraticos = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < catedraticos.length ; i++) {
          nuevoArray.push(new CursoCatedratico(res[i].idCatedraticoCurso, new Curso(res[i].codigoCurso, res[i].nombre), new Catedratico(0, res[i].nombres, res[i].apellidos)));
        }

      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.cursoCatedraticos = nuevoArray;
  } //Obtener de la BD, guardar cada registro como objeto de la clase CursoCatedrático

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
