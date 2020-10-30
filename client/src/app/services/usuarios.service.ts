import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }


  añadirUsuario(data:any){
    return this.httpClient.post('http://localhost:3000/usuario/nuevo', data);
  }
}
