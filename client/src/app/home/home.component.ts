import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()carnet: number
  publicaciones: Publicacion[];
  display: number;

  constructor() { }

  ngOnInit(): void {
    this.publicaciones = [];
    this.display = 0;
    this.getPublicaciones();
  }

  getPublicaciones(){

  }

  changeDisplay(numero: number){
    this.display = numero;
    if(numero == 1){
      this.getPublicaciones();
    }
  }

}
