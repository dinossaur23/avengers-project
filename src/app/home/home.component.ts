import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  description:String;
  getData:String;

  constructor(private _http : Http) { }

  ngOnInit() {

  let name;
    this._http.get("https://gateway.marvel.com/v1/public/characters?apikey=0179a757dba0051d01e2f740631acc2c&name=Hulk")
    .subscribe(result => {
    //  console.log(JSON.stringify(result));
      name = result.json();


      console.log(JSON.stringify(name));
    ;
    })

  }

  getHeroes(){

  }

}
