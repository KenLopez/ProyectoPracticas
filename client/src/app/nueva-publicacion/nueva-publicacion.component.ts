import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../Classes/Curso';
import { Catedratico } from '../Classes/Catedratico';
import { CursoCatedratico } from '../Classes/CursoCatedratico';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { PublicacionService } from '../services/publicacion.service';
import { Publicacion } from '../nodes/Publicacion';
import { Auxiliar } from '../Classes/Auxiliar';
import { CursoAuxiliar } from '../Classes/CursoAuxiliar';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})

export class NuevaPublicacionComponent implements OnInit {
  mensaje: string;
  @Input() usuario: number;
  cursos: Curso[];
  catedraticos: Catedratico[];
  cursoCatedraticos: CursoCatedratico[];
  auxiliares: Auxiliar[];
  cursosAuxiliar: CursoAuxiliar[];
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
    this.auxiliares = [];
    this.cursosAuxiliar = [];
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
    }else if(this.display == "4"){
      this.getAuxiliares() 
    }else if(this.display == "5"){
      this.getCursoAuxiliares()
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
  } 

  getCursoAuxiliares(){
    let nuevoArray: CursoAuxiliar[]=[]
    this.publicacion.getCursoAuxiliar().subscribe(
      res=>{
        let auxiliares = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < auxiliares.length ; i++) {
          nuevoArray.push(new CursoAuxiliar(res[i].idCatedraticoCurso, new Curso(res[i].codigoCurso, res[i].nombre), new Auxiliar(0, res[i].nombres)));
        }

      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.cursosAuxiliar = nuevoArray;
  }

  getAuxiliares(){
    let nuevoArray: Auxiliar[]=[]
    this.publicacion.getAuxiliar().subscribe(
      res=>{
        let auxiliares = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < auxiliares.length ; i++) {
          nuevoArray.push(new Auxiliar(res[i].noAuxiliar, res[i].nombres));
        }

      },err=>{
        console.log(err);
      }
    )
    console.log(nuevoArray);
    this.auxiliares = nuevoArray;
  }

  addPublicacionCurso(publicacion: Publicacion){
    this.publicacion.addPublicacionCurso(publicacion).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    console.log(publicacion)
  }

  addPublicacionCatedratico(publicacion: Publicacion){
    this.publicacion.addPublicacionCatedratico(publicacion).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    console.log(publicacion)
  }

  addPublicacionCursoCatedratico(publicacion: Publicacion){
    this.publicacion.addPublicacionCursoCatedratico(publicacion).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    console.log(publicacion)
  }

  addPublicacionAuxiliar(publicacion: Publicacion){
    this.publicacion.addPublicacionAuxiliar(publicacion).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    console.log(publicacion)
  }

  addPublicacioncursoAuxiliar(publicacion: Publicacion){
    this.publicacion.addPublicacionAuxiliarCurso(publicacion).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    console.log(publicacion)
  }

  publicar(){
    if(this.mensajeValido()){
      this.errorMensaje = "";
      
      let today = new Date()
      const d = new Date(); 
      
      //console.log(today)

      if(this.display == "1"){
        console.log(this.mensaje);
        console.log(this.cursos[this.index].toString());
        
        let publicacion: Publicacion={
          mensaje: this.mensaje,
          usuario_carnet: this.usuario,
          fecha: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0],
          curso_CodigoCurso: this.cursos[this.index].codigoCurso,
          tipo: 1
        }

        console.log(publicacion);

        this.addPublicacionCurso(publicacion);

      }else if(this.display == "2"){
        console.log(this.mensaje);
        console.log(this.catedraticos[this.index].toString());

        let publicacion: Publicacion={
          mensaje: this.mensaje,
          usuario_carnet: this.usuario,
          fecha: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0],
          catedratico_NoCatedratico: this.catedraticos[this.index].noCatedratico,
          tipo: 2
        }

        console.log(publicacion);

        this.addPublicacionCatedratico(publicacion);

      }else if(this.display == "3"){
        console.log(this.mensaje);
        console.log(this.cursoCatedraticos[this.index].toString());

        let publicacion: Publicacion={
          mensaje: this.mensaje,
          usuario_carnet: this.usuario,
          fecha: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0],
          curso_Catedratico_idCatedraticoCurso: this.cursoCatedraticos[this.index].id,
          tipo: 3
        }

        console.log(publicacion);

        this.addPublicacionCursoCatedratico(publicacion);

      }else if(this.display == "4"){
        console.log(this.mensaje);
        console.log(this.auxiliares[this.index].toString());

        let publicacion: Publicacion={
          mensaje: this.mensaje,
          usuario_carnet: this.usuario,
          fecha: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0],
          auxiliar_idAuxiliar: this.auxiliares[this.index].noAuxiliar,
          tipo: 4
        }

        console.log(publicacion);

        this.addPublicacionAuxiliar(publicacion);

      }else if(this.display == "5"){
        console.log(this.mensaje);
        console.log(this.cursosAuxiliar[this.index].toString());

        let publicacion: Publicacion={
          mensaje: this.mensaje,
          usuario_carnet: this.usuario,
          fecha: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0],
          auxiliar_Curso: this.cursosAuxiliar[this.index].id,
          tipo: 5
        }

        console.log(publicacion);

        this.addPublicacioncursoAuxiliar(publicacion);

      }
      //Guardar en BD
    }else{
      this.errorMensaje = "Aún no has escrito ningún mensaje.";
    }

    this.mensaje = "";
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
