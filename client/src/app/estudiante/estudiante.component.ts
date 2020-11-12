import { Component, OnInit } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';
import { CursosAprobadosService } from '../services/cursos-aprobados.service';
import { Curso } from './models/curso';
import { CursoAprobado } from './models/cursoAprobado';

@Component({
  selector: 'estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit{

  constructor(private cursoAprobados: CursosAprobadosService){}

  ngOnInit():void{
    this.getPensum();
    this.getCursosAprobados();
  }

  getPensum(){
    let nuevoArray: Curso[]=[]
    this.cursoAprobados.getPensum().subscribe(
      res=>{console.log(res);
        console.log("Marquitos");
        let cursos = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < cursos.length ; i++) {
          nuevoArray.push(res[i]);
        }

      },err=>{
        console.log(err);
      }
    )
    //console.log(nuevoArray);
    this.cursosArray = nuevoArray;
  }

  getCursosAprobados(){
    let nuevoArray: Curso[]=[]
    this.cursoAprobados.getCursosAprobados().subscribe(
      res=>{console.log(res);
        console.log("Marquitos");
        let cursosAprobados = JSON.parse(JSON.stringify(res));

        for (let i=0 ; i < cursosAprobados.length ; i++) {
          nuevoArray.push(res[i]);
        }
      },err=>{
        console.log(err);
      }
    )
    this.cursosArray2 = nuevoArray;
  }

  guardarAprobado(){
    console.log("metodo");
    let cursoAprobado: CursoAprobado = {
      carnetU: 201900629,
      cursoP: this.selectedCurso.idCursoPensum,
      notaAprobada: this.selectedCurso.nota
    }  
    this.cursoAprobados.postCursosAprobados(cursoAprobado).subscribe(
      res=>{console.log(res);
      console.log("Marquitos");},err=>{
        console.log(err);
      }
    );
      this.add();
      this.getCursosAprobados();
  }

  eliminarAprobado(){
    console.log("metodo");
    let cursoAprobado: CursoAprobado = {
      carnetU: 201900629,
      cursoP: this.selectedCurso.idCursoPensum,
      notaAprobada: this.selectedCurso.nota
    }  
    this.cursoAprobados.eliminarCursoAprobado(cursoAprobado).subscribe(
      res=>{console.log(res);
      console.log("Marquitos");},err=>{
        console.log(err);
      }
    );

    this.delete();
    this.getCursosAprobados();
  }
  
  cursosArray: Curso[] = [];

  cursosArray2: Curso[] = [];


  selectedCurso: Curso = new Curso();

  openForEdit(curso: Curso){
    this.selectedCurso = curso;
  }

  

  addOrEdit(){

    if(this.selectedCurso.idCursoPensum == 0){
      this.selectedCurso.idCursoPensum = this.cursosArray.length + 1;
      this.cursosArray.push(this.selectedCurso);
    }
    this.selectedCurso = new Curso();
  }

  add(){
    this.cursosArray2.push(this.selectedCurso);
    this.selectedCurso = new Curso();
  }

  delete(){
    if(confirm('Estas seguro de elimiar el curso seleccionado')){
      this.cursosArray2 = this.cursosArray2.filter(x => x != this.selectedCurso);
      this.selectedCurso = new Curso();
    }

   

  }

}