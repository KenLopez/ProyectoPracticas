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

  obtenerCarnets(){
    return this.httpClient.get('http://localhost:3000/usuario/carnet');
  }

  obtenerCorreos(){
    return this.httpClient.get('http://localhost:3000/usuario/mail');
  }

  obtenerContrasena(){
    return this.httpClient.get('http://localhost:3000/usuario/password');
  }
  cambiarContrasena(data:any){
    return this.httpClient.post('http://localhost:3000/usuario/contrasenaNueva', data);
  }
}
