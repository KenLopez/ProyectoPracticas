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

  compare(NoCarnet, Password){

    this.usuario.obtenerCarnets().subscribe(
      res1=>{
        console.log(res1);

        this.usuario.obtenerCorreos().subscribe(
          res2=>{
            console.log(res2);

            this.usuario.obtenerContrasena().subscribe(
              res=>{
                console.log(res);
                let contrasenas = JSON.parse(JSON.stringify(res));
                let usuarios = JSON.parse(JSON.stringify(res1));
                let correos = JSON.parse(JSON.stringify(res2));

                console.log(contrasenas.length);

                //if ( || correos.includes(NoCarnet)) {
                  for (let i=0 ; i < usuarios.length ; i++) {
                    console.log(res1[i].carnet)
                    console.log(NoCarnet.value);
                    if (res1[i].carnet == NoCarnet.value || res2[i].correo == NoCarnet.value){
                      alert('El usuario es el correcto');
                      if (res[i].contrasena == Password.value){
                        alert('usted ha ingresado exitosamente');
                      } else {
                        alert('La contraseña es incorrecta');
                        break;
                      }
                    } else {
                      console.log('Este usuario es incorrecto');
                    }
                  }
                //}
              },err=>{
                console.log(err);
              }
            );
          },err=>{
            console.log(err);
          }
          );
      },err=>{
        console.log(err);
      }
    );
    
  }

}
