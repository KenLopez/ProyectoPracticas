import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

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
