import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email:String;
  password:String;
  authFailed:boolean;

  constructor(private router:Router, private _http:Http) { }

  ngOnInit() {
    this.email = null;
    this.password = null;
    this.authFailed = false;
  }

  login(){
    let auth;
      this._http.get("localhost:3005/users/authenticate")
      .subscribe(result => {
        auth = result.json();
        console.log(JSON.stringify(auth));
      ;
      })

    if(auth.status == 'Sucess'){
      this.router.navigate(['./home']);
    }

    else{
      this.authFailed = true;
    }

  }

  firstAccess(){

  }

}
