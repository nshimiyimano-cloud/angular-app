import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

signinForm!:FormGroup;


  constructor(
    public router:Router,
    public authService:AuthService,
    public fb:FormBuilder,
    private route:ActivatedRoute
    ) {

this.signinForm=this.fb.group({
email:[''],
password:['']


})

  }

  ngOnInit(): void {
  }

loginUser(){

let returnUrl=this.route.snapshot.paramMap.get('returnUrl');

 this.authService.signIn(this.signinForm.value)


  setTimeout(()=>{

 if(this.authService.isLoggedIn()){





 alert("you are Login now")


 }
this.router.navigate([returnUrl || '/'])
},250)
}




}
