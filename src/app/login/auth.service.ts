import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../configurations/config';
import { JWT, User } from '../interfaces/User';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLogged :boolean = false;
  constructor(private http: HttpClient,private router:Router) { }

  async login(user:User){
    const url = `${URL}Auth`;
    
    await this.http.post<JWT>(url,user).subscribe((response) =>{
        const token = response.token;
        localStorage.setItem('jwt',token);
        this.isLogged = true;
        this.router.navigate(['/profile']);
        this.succesMessage('Logged Sucessfully');
    }, (error) =>{
        this.isLogged = false;
        this.errorMessage('Credentials Invalid');

    });
  }
  succesMessage(message:string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  errorMessage(message:string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
    });
  }
}