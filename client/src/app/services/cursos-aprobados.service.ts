import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  constructor(private httpClient: HttpClient) { }

  getPensum(){
    return this.httpClient.get('http://localhost:3000/cursoAprobado/getPensum');
  }

  getCursosAprobados(){
    return this.httpClient.get('http://localhost:3000/cursoAprobado/getCursosAprobados');
  }

  postCursosAprobados(data: any){
    return this.httpClient.post('http://localhost:3000/cursoAprobado/nuevo',data);
  }

  eliminarCursoAprobado(data: any){
    return this.httpClient.post('http://localhost:3000/cursoAprobado/eliminar',data);
  }
}
