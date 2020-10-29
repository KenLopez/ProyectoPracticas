import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['ryan', 'joe', 'cameron']

  sayHello() {
    alert('Hello');
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = "";
    return false;
  }

  deleteUser(user) {
    for(let i=0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      } 
  }
}}