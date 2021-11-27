import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../interfaces/User';
import { AuthService } from '../login/auth.service';
import { URL } from '../configurations/config';

@Component({
  selector: 'app-watch-my-tweets',
  templateUrl: './watch-my-tweets.component.html',
  styleUrls: ['./watch-my-tweets.component.css']
})
export class WatchMyTweetsComponent implements OnInit {

  Tweet:Tweet[];
  constructor(private router: Router,private authService:AuthService,private http:HttpClient) { 
    this.Tweet = [];
  }

  ngOnInit(): void {
    if(this.currentId() == 0){
      this.router.navigate(['/login']);
    }else{
      const url = `${URL}Twitt?idUser=${this.currentId()}`;
      console.log(url);
      this.http.get(url).subscribe(res =>{
        this.Tweet = res as Tweet[];
        console.log(this.Tweet); 
      });
    }
  }

  currentId(){
    return this.authService.currentId;
  }
}
