import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  comentario: String;
  usuario: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
