import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private httpClient: HttpClient) { }

  getCursos(){
    return this.httpClient.get('http://localhost:3000/cursos/getCurso');
  }

  getCatedraticos(){
    return this.httpClient.get('http://localhost:3000/cursos/catedratico');
  }

  getAuxiliar(){
    return this.httpClient.get('http://localhost:3000/cursos/auxiliar');
  }

  getCursoAuxiliar(){
    return this.httpClient.get('http://localhost:3000/cursos/curso-auxiliar');
  }

  getCursoCatedratico(){
    return this.httpClient.get('http://localhost:3000/cursos/curso-catedratico');
  }
  addPublicacionCurso(data:any){
    return this.httpClient.post('http://localhost:3000/publicacion/nuevaCurso',data);
  }

  addPublicacionCatedratico(data:any){
    return this.httpClient.post('http://localhost:3000/publicacion/nuevaCatedratico',data);
  }

  addPublicacionCursoCatedratico(data:any){
    return this.httpClient.post('http://localhost:3000/publicacion/nuevaCursoCatedratico',data);
  }

  getAuxiliar(){
    return this.httpClient.get('http://localhost:3000/cursos/auxiliar');
  }

  getCursoAuxiliar(){
    return this.httpClient.get('http://localhost:3000/cursos/curso-auxiliar');
  }
}
