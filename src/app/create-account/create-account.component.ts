import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

signupForm!:FormGroup;

constructor(public fb:FormBuilder,
 public authService:AuthService,
  public router:Router){
this.signupForm=this.fb.group({
username:['',Validators.required],
email:['',Validators.required],
//mobile:['']
password:['',Validators.required]


})


  }






//getter functions


  get password(){

return this.signupForm.get('password');

  }
get username(){
  return this.signupForm.get('username');

}
get email(){
  return this.signupForm.get('email');

}





  registerUser(){
this.authService.singup(this.signupForm.value)
.subscribe(res=>{

  if(res.result){
this.signupForm.reset()
this.router.navigate(['log-in'])

  }
})

  }

  ngOnInit(): void {
  }

}
