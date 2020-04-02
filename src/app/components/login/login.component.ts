import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserItem } from 'src/app/models/UserInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  ruolo:string;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login() {
      this.loginService.eseguiLogin(this.username,this.password,this.ruolo);
  }

}
