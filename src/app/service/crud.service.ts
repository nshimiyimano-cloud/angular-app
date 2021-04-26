import { HttpHeaders,HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from './emploee';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //node/exp[ress api
Rest_api:string='http://localhost:3000/api/employees';
httpHeaders=new HttpHeaders().set('Content-Type','application/json');

  constructor(private HttpClient:HttpClient) {  }

//add

  addEmployee(data:Employee){

let api_url=`${this.Rest_api}/add-employee`;
return this.HttpClient.post(api_url,data)
.pipe(catchError(this.hundleError));

  }

  //get all employee object

  getEmplyees(){
    return this.HttpClient.get(this.Rest_api)

  }

//get single employee object

getEmployee(id:any):Observable<any>{
let api_url:string=`${this.Rest_api}/read-employee/${id}`;

return this.HttpClient.get(api_url,{headers:this.httpHeaders})
.pipe(map((res:any)=>{
return res || {}
}),
catchError(this.hundleError)
)
}


//update employee

updateEmployee(id:any,data:any):Observable<any>{
  let api_url:string=`${this.Rest_api}/update-employee/${id}`;
return this.HttpClient.put(api_url,data,{headers:this.httpHeaders})
.pipe(catchError(this.hundleError));

}





deleteBook(id:any):Observable<any>{
  let api_url:string=`${this.Rest_api}/delete-employee/${id}`;
  return this.HttpClient.delete(api_url,{headers:this.httpHeaders})
 .pipe(catchError(this.hundleError));  // i will search how to get err in html from catch error

}




  //error hundling


  hundleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){

//hundle client error
errorMessage=error.error.message;
    }
    else{
      //hundle server error
errorMessage=`Error Code: ${error.status}\nMessage:${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
/*  */
