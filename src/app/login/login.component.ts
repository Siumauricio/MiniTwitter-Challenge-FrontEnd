import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup;
  validForm:boolean =false;
  
  constructor(private formBuilder:FormBuilder,private router: Router,private authService:AuthService)  { 
    this.LoginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(30)]],
      password: ['',[Validators.required,Validators.maxLength(20)]],
    });}

  ngOnInit(): void {
  }
  async onSubmit(){
    if(this.LoginForm.valid){
      this.authService.login(this.LoginForm.getRawValue());
      this.validForm = true;
    }else{
      this.LoginForm.markAllAsTouched();
    }
  }

  get password(){
    return this.LoginForm.get('password');
  }
  get username(){
    return this.LoginForm.get('username');
  }
  errorMessage(message:string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
    });
  }

}
