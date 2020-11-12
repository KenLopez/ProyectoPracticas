import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  @Output() display = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDisplay(numero: number){
    this.display.emit(numero);
  }

}
