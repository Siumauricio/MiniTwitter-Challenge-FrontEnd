import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup;
  validForm:boolean =false;
  constructor(private formBuilder:FormBuilder,private router: Router) { 
    this.LoginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(30)]],
      password: ['',[Validators.required,Validators.maxLength(20)]],
    });}

  ngOnInit(): void {
  }
  async onSubmit(){
    if(this.LoginForm.valid){
      console.log('Hola ')
      this.router.navigate(['/profile'])

      this.validForm = true;
    }else{
      this.LoginForm.markAllAsTouched();
      // this.errorMessage('Please Fill in a valid value for all required fields.')
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
