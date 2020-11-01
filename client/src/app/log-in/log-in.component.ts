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
                let contraseñas = JSON.parse(JSON.stringify(res));
                let usuarios = JSON.parse(JSON.stringify(res1));
                let correos = JSON.parse(JSON.stringify(res2));
        
                if (usuarios.includes(NoCarnet) || correos.includes(NoCarnet)) {
                  for (let i=0 ; i<usuarios.length ; i++) {
                    if (usuarios[i] == NoCarnet || correos[i] == NoCarnet){
                      if (contraseñas[i] == Password) {
                        alert("Ha ingresado exitosamente");
                      } else {
                        alert("La contraseña no es correcta")
                      }
                    }
                  }
                }

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
