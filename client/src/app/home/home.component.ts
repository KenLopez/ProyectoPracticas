import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()carnet: number

  constructor() { }

  ngOnInit(): void {
    console.log(this.carnet);
  }

}
