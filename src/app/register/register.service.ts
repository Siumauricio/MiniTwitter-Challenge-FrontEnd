import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../configurations/config';
import { User } from '../interfaces/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,private router:Router) { }

  async createUser(user:User){
    const url = `${URL}User`;

    await this.http.post(url,user).toPromise().then(async resp=>{
        
        if (resp ){
            console.log(resp)
            this.succesMessage('¡Registration Succesful!');
            this.router.navigate(['/login']);
        } else{
            this.errorMessage('¡Sorry, Probably this Username was Taken!');
        }
        }).catch(err=>{
            this.errorMessage('Something Went Wrong!');
            console.log(err);
        })
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