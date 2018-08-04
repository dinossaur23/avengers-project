import { Component, OnInit } from '@angular/core';
import { Avengers } from '../avengers';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {
  avengers: Avengers = {
    id: 1,
    name: 'Hulk'
  };

  constructor() { }

  ngOnInit() {
  }

}
