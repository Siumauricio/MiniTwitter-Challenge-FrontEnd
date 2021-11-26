import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-Twitter';
  currentUser:any
  constructor(private router: Router){
  }
  click(){

  }
  logout(){
    console.log("logout")
    this.router.navigate(['/navbar'])

  }
}
