import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  getCursos(){
    return this.httpClient.get('http://localhost:3000/cursos/getCurso');
  }

}
