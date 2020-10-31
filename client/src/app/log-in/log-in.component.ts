import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../nodes/usuario';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
  }

  llamarCarnets(){
    this.usuario.obtenerCarnets().subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }

  llamarCorreos(){
    this.usuario.obtenerCorreos().subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }

  llamarContrasenas(){
    this.usuario.obtenerContrasena().subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }

}
