import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Contrasena } from '../nodes/contrasenaNueva';

@Component({
  selector: 'app-restart-user',
  templateUrl: './restart-user.component.html',
  styleUrls: ['./restart-user.component.css']
})
export class RestartUserComponent implements OnInit {

  contrasenaNueva: Contrasena={
    nuevaContrasena:"",
    carnet: null
  }

  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
  }

  resetPassword(Carnet, Correo){

    

        this.usuario.obtenerCorreos().subscribe(
          res2=>{
            console.log(res2);

            this.usuario.obtenerCarnets().subscribe(
              res=>{
                console.log(res);
                let carnets = JSON.parse(JSON.stringify(res));
                let correos = JSON.parse(JSON.stringify(res2));

                console.log(carnets.length);

                //if ( || correos.includes(NoCarnet)) {
                  for (let i=0 ; i < correos.length ; i++) {
                    console.log(Carnet.value);
                    if (res[i].carnet == Carnet.value){
                      if (res2[i].correo == Correo.value){



                        this.usuario.cambiarContrasena(this.contrasenaNueva).subscribe(
                          res=>{
                            console.log(res);
                            alert('Se ha cambiado la contraseña exitosamente');
                          },err=>{
                            console.log(err);
                          }
                        );
                        


          
                      } else {
                        console.log('El correo no coinside con el carnet');
                      }
                    } else {
                      console.log('El carnet ingresado no existe en la base de datos');
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
      
    
  }

}
