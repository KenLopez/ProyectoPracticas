import { Component } from '@angular/core';
import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cursosArray: Curso[] = [
    {id:1, nombre: 'IPC1', creditos: 4},
    {id:2,nombre: 'IPC2', creditos: 5},
    {id:3,nombre: 'LFP', creditos: 3},
    {id:5,nombre: 'Logica de Sistemas', creditos: 2},
    {id:6,nombre: 'MC1', creditos: 5},
    {id:7,nombre: 'MC2', creditos: 5},
    {id:8,nombre: 'Analisis Probabilistico', creditos: 4},
    {id:9,nombre: 'ORG. Lenguajes y Compiladores 1', creditos: 4},
    {id:10,nombre: 'Organizacion Computacional', creditos: 3},
    {id:11,nombre: 'Estructura de Datos', creditos: 5},
    {id:12,nombre: 'Teoria de Sistemas 1', creditos: 5},
    {id:13,nombre: 'Teoria de Sistemas 2', creditos: 5},
    {id:14,nombre: 'ORG. Lenguajes y Compiladores 2', creditos: 5},
    {id:15,nombre: 'ARQ. Compu y Ensambladores 1', creditos: 5},
    {id:16,nombre: 'ARQ. Compu y Ensambladores 2', creditos: 4},
    {id:17,nombre: 'Manejo e Implementacion de Archivos', creditos: 4},
    {id:18,nombre: 'Sistemas Operativos 1', creditos: 5},
    {id:19,nombre: 'Sistemas Operativos 2', creditos: 4},
    {id:20,nombre: 'Redes de Computadoras 1', creditos: 4},
    {id:21,nombre: 'Redes de Computadoras 2', creditos: 4},
    {id:22,nombre: 'Sistemas de Bases de Datos 1', creditos: 4},
    {id:23,nombre: 'Sistemas de Bases de Datos 2', creditos: 4},
    {id:24,nombre: 'Analisis y Diseño de Sistemas 1', creditos: 5},
    {id:25,nombre: 'Analisis y Diseño de Sistemas 2', creditos: 5},
    {id:26,nombre: 'Modelacion y Simulacion 1', creditos: 3},
    {id:27,nombre: 'Modelacion y Simulacion 2', creditos: 3},
    {id:28,nombre: 'Inteligencia Artificial 1', creditos: 4},
    {id:29,nombre: 'Inteligencia Artificial 2', creditos: 4},
    {id:30,nombre: 'Base de Datos Avanzadas', creditos: 3},
    {id:31,nombre: 'Sistemas Organizacionales y Gerenciales 1', creditos: 3},
    {id:32,nombre: 'Sistemas Organizacionales y Gerenciales 2', creditos: 3},
    {id:33,nombre: 'Redes de Nueva Generacion', creditos: 3},
    {id:34,nombre: 'Sistemas Aplicados 1', creditos: 5},
    {id:35,nombre: 'Sistemas Aplicados 2', creditos: 5},
    {id:36,nombre: 'Practica Inicial', creditos: 0},
    {id:37,nombre: 'Practica Intermedia', creditos: 0},
    {id:38,nombre: 'Practica Final', creditos: 0},
    {id:39,nombre: 'Seminario de Sistemas 1', creditos: 3},
    {id:40,nombre: 'Seminario de Sistemas 2', creditos: 3},
    {id:41,nombre: 'Seminario de Investigacion', creditos: 3}
  ];

  cursosArray2: Curso[] = [
    
  ];


  selectedCurso: Curso = new Curso();

  openForEdit(curso: Curso){
    this.selectedCurso = curso;
  }

  addOrEdit(){

    if(this.selectedCurso.id == 0){
      this.selectedCurso.id = this.cursosArray.length + 1;
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
