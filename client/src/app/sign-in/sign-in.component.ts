import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Usuario } from '../nodes/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    NoID: string[] = [];
    LNames: string[] = [];
    LLastNames: string[] =[];
    LPassword: string[] = [];
    LEmail: string[] = [];

  data(ID, Names, LastNames, Password, Email){

    if (ID.value.length == 0){
      alert('ERROR: No ha colocado su registro académico');
      return false;
    }
    else if (Names.value.length == 0){
      alert('ERROR: No ha colocado sus nombres');
      return false;
    }
    else if (LastNames.value.length == 0){
      alert('ERROR: No ha colocado sus apellidos');
      return false;
    }
    else if (Password.value.length == 0){
      alert('ERROR: No ha colocado una contraseña');
      return false;
    }
    else if (Email.value.length == 0){
      alert('ERROR: No ha colocado su correo');
      return false;
    }
    else if(this.LEmail.includes(Email.value)){
      alert('El correo que intenta registrar ya se ha usado anteriormente');
      return false;
    }
    else if (this.NoID.includes(ID.value)){
      alert('El registro académico que intenta registrar ya se ha usado anteriormente');
      return false;
    }
    else {
      this.NoID.push(ID.value);
      this.LNames.push(Names.value);
      this.LLastNames.push(LastNames.value);
      this.LPassword.push(Password.value);
      this.LEmail.push(Email.value);

      console.log(this.NoID);
      console.log(this.LNames);
      console.log(this.LLastNames);
      console.log(this.LPassword);
      console.log(this.LEmail);

      ID.value = "";
      Names.value = "";
      LastNames.value = "";
      Password.value = "";
      Email.value = "";

      alert('Usted se ha registrado exitosamente');
      return false;
    }
  }

  user: Usuario={
    carnet:null,
    nombres:'',
    apellidos:'',
    contrasena:'',
    correo:''
  }

  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.usuario.añadirUsuario(this.user).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }

}
