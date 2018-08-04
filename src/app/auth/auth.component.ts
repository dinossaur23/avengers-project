import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email:String;
  password:String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.email = null;
    this.password = null;
  }

  login(){
    console.log(this.email);
    console.log(this.password);

    this.router.navigate(['./home']);

  }

  firstAccess(){

  }

}
