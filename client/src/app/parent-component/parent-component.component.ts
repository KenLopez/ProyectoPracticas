import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  display: number;
  carnet: number;

  constructor() {
    this.display = 0;
   }
  
  iniciar_home(respuesta: number){
    this.display = 1
    this.carnet = respuesta
  }

  ngOnInit(): void {
    
  }

}
