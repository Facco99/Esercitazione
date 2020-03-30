import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  formLogin(form: NgForm){
    sessionStorage.setItem("user",form.value.username);
    this.router.navigateByUrl("/home");
  }

}
