import { Tweet } from './../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { URL } from '../configurations/config';

@Component({
  selector: 'app-watch-all-tweets',
  templateUrl: './watch-all-tweets.component.html',
  styleUrls: ['./watch-all-tweets.component.css']
})
export class WatchAllTweetsComponent implements OnInit {
  Tweet:Tweet[];
  constructor(private router: Router,private authService:AuthService,private http:HttpClient) { 
    this.Tweet = [];
  }

  ngOnInit(): void {
    if(this.currentId() == 0){
      this.router.navigate(['/login']);
    }else{
      const url = `${URL}Twitt/GetAll`;
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
