import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import{SignUpService} from '../auth/sign-up/sign-up.service'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers:[SignUpService]
})
export class MainModule { }
