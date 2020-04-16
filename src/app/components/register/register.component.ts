import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  get usernameControl(): FormControl{
    return this.registerForm.get('username') as FormControl;
  }
  
  get passwordControl(): FormControl{
    return this.registerForm.get('password') as FormControl;
  }

  constructor(private fb:FormBuilder, private router:Router, private loginService:LoginService) { 
    this.registerForm=this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.loginService.eseguiRegister(this.usernameControl.value,this.passwordControl.value);
    this.router.navigateByUrl("/login");
  }

}
