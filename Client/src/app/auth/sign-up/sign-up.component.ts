import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { AuthService } from '../auth.service'


@Component({
  selector: 'as-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']

})
export class SignUpComponent implements OnInit {

  signUpForm;

  constructor(private fb: FormBuilder
    , private signupservice: AuthService
  ) { }


  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: [''],
      password: [''],
      confirmpassword: [''],
      email: ['']
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
    this.signupservice.signUp(this.signUpForm.value).subscribe(
      data => { console.log(data) },
      err => { console.log(err) });
  }

}
