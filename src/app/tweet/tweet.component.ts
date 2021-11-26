import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  TweetForm : FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router) { 
    this.TweetForm = this.formBuilder.group({
      tweet: ['',[Validators.required,Validators.maxLength(130)]],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
  }

  get tweet(){
    return this.TweetForm.get('tweet');
  }
}
