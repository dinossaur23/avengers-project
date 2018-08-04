import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  name:String;
  email:String;
  password:String;
  confirmPassword:String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = null;
    this.email = null;
    this.password = null;
    this.confirmPassword = null;
  }

  login(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);

    this.router.navigate(['./home']);
  }
}
