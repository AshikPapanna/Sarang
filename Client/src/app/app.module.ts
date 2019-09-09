import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
    declarations: [
        AppComponent,
        PagenotfoundComponent,
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
 
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}