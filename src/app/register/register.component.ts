import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm : FormGroup;
  validForm:boolean =false;

  constructor(private registerService:RegisterService,private formBuilder:FormBuilder) { 
    this.RegisterForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(30)]],
      email: ['',[Validators.required,Validators.maxLength(40)]],
      password: ['',[Validators.required,Validators.maxLength(20)]],
      confirmpassword: ['',[Validators.required,Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
  }
  async onSubmit(){
    let result = this.RegisterForm.getRawValue();
    if(this.RegisterForm.valid && result.password == result.confirmpassword){
      this.registerService.createUser(this.RegisterForm.getRawValue());
    }else{
      this.RegisterForm.markAllAsTouched();
      // this.errorMessage('Please Fill in a valid value for all required fields.')
    }
 }

 get email(){
    return this.RegisterForm.get('email');
 }
  get password(){
    return this.RegisterForm.get('password');
 }
  get confirmpassword(){
    return this.RegisterForm.get('confirmpassword');
 }
 get username(){
    return this.RegisterForm.get('username');
 }
 get equalPasswords(){
    let result = this.RegisterForm.getRawValue();
    if(result.password == result.confirmpassword){
      return true;
    }else{
      return false;
    }
  }

  errorMessage(message:string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
    });
  }

}
