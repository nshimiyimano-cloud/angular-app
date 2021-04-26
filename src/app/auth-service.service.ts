import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  Rest_api:string='http://localhost:3000/api/employees';

  constructor(private http:HttpClient) { }

registUser(user:any){
  return this.http.post<any>(this.Rest_api+'/add-employee',user)
}

/* loginUser(user:any){

  return this.http.post(this.Rest_api+'/login',user)
} */

loginIn(){
  return !!localStorage.getItem('token');
}
getToken(){
  return localStorage.getItem('token'); //so we can use this in tokeninterceptorService in our service
}

logout(){  /* this method will called on logout ling in html ex <a (click)="AuthService.logout()">logou</a>*/
  localStorage.removeItem('token');
}

isLoggedIn(){
  return false;
}

}
