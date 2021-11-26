import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { WatchAllTweetsComponent } from './watch-all-tweets/watch-all-tweets.component';
import { AuthService } from './login/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './guards/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}
@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, RegisterComponent,  ProfileComponent, TweetComponent, WatchAllTweetsComponent],
  imports: [BrowserModule, AppRoutingModule,    ReactiveFormsModule,    SweetAlert2Module.forRoot(), HttpClientModule,JwtModule.forRoot({config: {tokenGetter:tokenGetter,allowedDomains:["https://localhost:44350/"],disallowedRoutes:[]} })

  ],
  providers: [RegisterService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
