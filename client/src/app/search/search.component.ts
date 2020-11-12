import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() seleccion = new EventEmitter<number>();
  index: number;

  constructor() { }

  ngOnInit(): void {
    this.index = 1;
  }

  changeIndex(index: number){
    this.index = index;
  }

  filtrar(){
    this.seleccion.emit(this.index);
  }

}
