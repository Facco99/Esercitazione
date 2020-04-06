import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserItem } from 'src/app/models/UserInterface';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get usernameControl(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }
  
  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  get ruoloControl(): FormControl{
    return this.loginForm.get('ruolo') as FormControl;
  }

  rules:string[] = ['admin','user'];

  loginForm:FormGroup;

  constructor(private loginService:LoginService, private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      username: [''],
      password: [''],
      ruolo: [''],
    });
   }

  ngOnInit(): void {
  }

  login() {
      this.loginService.eseguiLogin(this.usernameControl.value,this.passwordControl.value,this.ruoloControl.value);
  }

}
