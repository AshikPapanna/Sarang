import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms'
import {SignUpService} from './sign-up.service'
 

@Component({
  selector: 'as-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
  
})
export class SignUpComponent implements OnInit {
 

  constructor(private fb:FormBuilder
    
    ,private signupservice:SignUpService
    ) { }
  signUpForm = this.fb.group({
    username: [''],
    password: [''],
    confirmpassword: [''],
    email: ['']
  })

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signUpForm.value)
   this.signupservice.signUp();
  }

}
