import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  endpoint='http://localhost:3000/api/users';

  myHeaders=new HttpHeaders().set('Content-Type', 'application/json');
currentUser:any;


  constructor(private http:HttpClient,private router:Router) { }

//signup

singup(user:User):Observable<any>{

let api=`${this.endpoint}/regist-user`;

return this.http.post(api,user)
.pipe(catchError(this.handleError));

}


//eg us we use get employeee suppose will accessed if who login is has admin role

getEmployees(){
let myHeaders=new Headers();
let token=localStorage.getItem('access_token');
myHeaders.append('Authorization','Bearer ' +token)

//let options=new Request({Headers:header})



}



//sign-in

signIn(user:User){
  let api = `${this.endpoint}/signin`;

  return this.http.post<any>(api,user)
  .subscribe((res:any)=>{
localStorage.setItem('access_token',res.token)
this.getUserProfile(res._id).subscribe(res=>{

this.currentUser=res;


if(localStorage.length>0){
  this.router.navigate(['user-profile/'+this.currentUser.msg._id]);
  console.log(res)


}

})

  })


// this.router.navigate(['user-profile/'+this.currentUser.msg._id])


}


//to get token

getToken(){
  return localStorage.getItem("access_token");
}

isLoggedIn():boolean{
let authToken=localStorage.getItem("access_token");
return (authToken!==null)? true:false


}





//to logout as remove token

doLogout(){
  let removeToken=localStorage.removeItem("access_token");

  if(removeToken==null){
    this.router.navigate(['log-in']);
  }
}










//user profile

getUserProfile(id:any):Observable<any>{
  let api = `${this.endpoint}/user-profile/${id}`;
  return this.http.get<Response>(api, { headers: this.myHeaders })
  .pipe(map((res:object)=>{

return res || {}

  }),
  catchError(this.handleError)
  )

}


// Error
handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}
}



