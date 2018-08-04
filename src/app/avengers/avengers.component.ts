import { Component, OnInit } from '@angular/core';
import { Avengers } from '../avengers';
import { Http } from '@angular/http';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  getData:String;

  avengers: Avengers = {
    id: 1,
    name: 'Hulk'
  };

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("https://gateway.marvel.com/v1/public/characters?apikey=0179a757dba0051d01e2f740631acc2c&name=Hulk")
       .subscribe(
          data => this.getData = JSON.stringify(data),
          error => alert(error),
          () => console.log(this.getData)
       );
  }

}
