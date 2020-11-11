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

  getCursoCatedratico(){
    return this.httpClient.get('http://localhost:3000/cursos/curso-catedratico');
  }

  addPublicacion(data:any){
    return this.httpClient.post('http://localhost:3000/publicacion/nueva',data);
  }
}
