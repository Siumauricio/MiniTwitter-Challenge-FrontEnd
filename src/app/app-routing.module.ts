import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '' ,children: [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent,pathMatch: 'full' },
        {path:'register',component:RegisterComponent},
        {path:'profile',component:ProfileComponent}
    ]} 

  
  // { path: 'login',  component: LoginComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
