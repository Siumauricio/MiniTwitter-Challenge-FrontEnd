import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { WatchAllTweetsComponent } from './watch-all-tweets/watch-all-tweets.component';

const routes: Routes = [
    { path: '' ,children: [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent,pathMatch: 'full' },
        {path:'register',component:RegisterComponent},
        {path:'profile',component:ProfileComponent},
        {path:'Tweet',component:TweetComponent},
        {path:'watch-all-tweets',component:WatchAllTweetsComponent}
    ]} 

  
  // { path: 'login',  component: LoginComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
