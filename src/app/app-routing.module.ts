import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { WatchAllTweetsComponent } from './watch-all-tweets/watch-all-tweets.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { WatchMyTweetsComponent } from './watch-my-tweets/watch-my-tweets.component';

const routes: Routes = [
    { path: '' ,children: [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent,pathMatch: 'full' },
        {path:'register',component:RegisterComponent},
        {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
        {path:'Tweet',component:TweetComponent,canActivate:[AuthGuardService]},
        {path:'watch-all-tweets',component:WatchAllTweetsComponent,canActivate:[AuthGuardService]},
        {path:'watch-my-tweets',component:WatchMyTweetsComponent,canActivate:[AuthGuardService]}
    ]} 
  ,{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
