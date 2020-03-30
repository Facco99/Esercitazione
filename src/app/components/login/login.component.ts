import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.eseguiLogin(this.username,this.password);
  }

}
