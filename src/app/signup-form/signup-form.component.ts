import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

form=new FormGroup({
account:new FormGroup({
  username:new FormControl('',[Validators.required,
    Validators.minLength(3),
    UsernameValidators.canNotContainSpace
  ],UsernameValidators.shouldBeUnique),                                                   //async passed in 3(third argument of this new FormControl)
  password:new FormControl('',Validators.required)
})
})
;


get username(){

  return this.form.get('account.username');
}

get password(){
  return this.form.get('account.password');
}

//to set error on submit
login(){
  this.form.setErrors({
    invalidLogin:true
  })
}


  constructor() { }



}
