import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { LoginComponent } from '../auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        redirectTo: '/main',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
