import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../Classes/Publicacion';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicaciones: Publicacion[] = []

  constructor() { }

  ngOnInit(): void {
    //getPublicaciones();
  }

  

}
