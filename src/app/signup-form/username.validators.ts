import { AbstractControl, ValidationErrors } from "@angular/forms";

import { Observable } from "rxjs";

//we calsernameValidators.canNotContainSpace() because is static

export class UsernameValidators{

  static canNotContainSpace(control:AbstractControl):ValidationErrors | null{

//then check if contain space


if((control.value as string).indexOf(' ')>=0){
//here we use validationErrors( as type alias) because is to return validation errors

return {canNotContainSpace:true}



}
else{
  return null;
}
  }

  static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
//here to check if server take username easy as we use http but here we use fake server let assume nshimiyimana username is already taken
return new Promise((resolve,reject)=>{

setTimeout(()=>{




if(control.value==="nshimiyimana"){
  resolve({shouldBeUnique:true})
}
else{
  resolve(null)
}



},3000)

})



  }
}




