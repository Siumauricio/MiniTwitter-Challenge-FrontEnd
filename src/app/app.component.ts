import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './login/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-Twitter';
  currentUser:any
  constructor(private router: Router,private jwtHelper: JwtHelperService,private authService:AuthService){
  }
  click(){

  }
  logout(){
    console.log("logout")
    localStorage.removeItem('jwt');
    this.authService.isLogged=false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(){
    const token = localStorage.getItem('jwt');
    if(token && !this.jwtHelper.isTokenExpired(token)){
      console.log('Hola');
      return true;
    }
    return false;
  }
  get isLogged(){
    return this.authService.isLogged;
  }
}
