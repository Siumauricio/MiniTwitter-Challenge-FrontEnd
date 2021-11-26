import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { URL } from '../configurations/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  TweetForm : FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router,private authService:AuthService,private http: HttpClient) { 
    this.TweetForm = this.formBuilder.group({
      tweet: ['',[Validators.required,Validators.maxLength(130)]],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.TweetForm.valid){
      const url = `${URL}Twitt`;
      let tweet = {idUser:this.authService.currentId,twitt:this.TweetForm.value.tweet};
      this.http.post(url,tweet).subscribe(res =>{
        this.succesMessage("Tweet Sended");
        this.router.navigate(['/profile']);
      });
    }

  }

  get tweet(){
    return this.TweetForm.get('tweet');
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
}
