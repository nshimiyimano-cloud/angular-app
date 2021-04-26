import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

 isTrue=true;
 isFalse=false;
isLoggedIn!:boolean;
  readonly API_URL = 'http://localhost:3000';
  constructor( private http:HttpClient) { }

  ngOnInit(): void {  }

  signIn(){
this.http.get(this.API_URL+'/token/sign')
.subscribe((res:any)=>{
  console.log(res);

  if (res['token']) {
localStorage.setItem('token',res['token']);
this.isLoggedIn=this.isTrue;
  }
},
(error)=>{
  console.log(error);
  this.isLoggedIn=this.isFalse;
})


  }


  getPath(){
    this.http.get(this.API_URL+'/path1')
    .subscribe(res=>{
      console.log(res)
    },
    (error)=>{
      console.log(error);
    })
  }

doLogout(){

  localStorage.removeItem('token');
  this.isLoggedIn=this.isFalse;
}


}

