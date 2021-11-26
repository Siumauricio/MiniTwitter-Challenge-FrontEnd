import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { URL } from '../configurations/config';
import { Profile } from '../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile : Profile;
  constructor(private http: HttpClient,private authService:AuthService) { 
    this.profile = {
      idUser: 0,
      username: '',
      email: '',
      followers: 0,
      following: 0,
      joinDate: new Date(),
      description: ''
    }
  }

  ngOnInit(): void {
    const url = `${URL}User?id=${this.currentId()}`;
    this.http.get<Profile>(url).subscribe((response:Profile) => {
      this.profile = response;
    });
  }

  currentId(){
    return this.authService.currentId;
  }


}
