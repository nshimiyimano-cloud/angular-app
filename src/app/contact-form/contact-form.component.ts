import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


log(x:any){console.log(x)}

submit(myForm:any){
console.log(myForm)
//so you can validate this myForm here programatically becouse ngFrom has same properties as form object eg valid,invalid,pristine,touch..
if(myForm.valid){
  alert('your form is with valid data')
}
else{

  alert('you form is not valid')
}
/* if(myForm.value.comment>20){
  alert('your comment is so long')
}


 */
}
contactMethod=[
  {id:1,name:"email"},
  {id:2,name:"phone"}
]


}
