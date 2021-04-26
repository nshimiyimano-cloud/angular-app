import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import {combineLatest, Observable } from "rxjs";


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})



export class EmployeeEditComponent implements OnInit {
  getId:any;
  //to implement optional query params

page:any;

employees:any;

updateForm!:FormGroup;



  constructor(private crudService:CrudService
    ,private formBuilder:FormBuilder,
    private ngZone:NgZone,
    private router: Router,

private activatedRoute:ActivatedRoute,private route:ActivatedRoute
    ) {





     this.getId=this.activatedRoute.snapshot.paramMap.get('id');
this.page=this.activatedRoute.snapshot.queryParamMap.get('page');



     this.crudService.getEmployee(this.getId).subscribe((res)=>{


      //codes to update form with getted data with specific id in parameter

      this.updateForm.setValue({
 firstName:res['firstName'],
lastName:res['lastName'],
location:res['location'],
age:res['age'],
salary:res['salary'],
email:res['email'],
phone:res['phone']

      })

     })
//codes to fill form to send to update


this.crudService.getEmployee(this.getId).subscribe((res)=>{

  this.updateForm=this.formBuilder.group({
    firstName:res['firstName'],
    lastName:res['lastName'],
    location:res['location'],
    age:res['age'],
    salary:res['salary'],
    email:res['email'],
    phone:res['phone']


})
})
this.updateForm=this.formBuilder.group({
  firstName:[''],
  lastName:[''],
  location:[''],
  age:[''],
  salary:[''],
  email:[''],
  phone:['']


})





    }

  ngOnInit(): void {
console.log('id',this.route.snapshot.paramMap.get('id'));
console.log('getall',this.route.snapshot.paramMap.getAll('page'));
console.log('getall on queryP',this.route.snapshot.queryParamMap.getAll('page'));

console.log('keys',this.route.snapshot.paramMap.keys);
console.log('has',this.route.snapshot.paramMap.has('page'));


combineLatest<Observable<any>>([
this.route.paramMap,
this.route.queryParamMap


]

.map(combined=>{




return this.crudService.getEmplyees()
})
)
.subscribe((emp:any)=>this.employees=emp);








//so how we can combine these two observable obs=Observable.combineLatest([param,quer]) abs.subscribe.....
   /*  this.activatedRoute.paramMap.subscribe(params=>{ let id=params.get('id')});
    this.activatedRoute.queryParamMap.subscribe(params=>{ let query=params.get('page') }); */
  }
onUpdate():any{
this.crudService.updateEmployee(this.getId,this.updateForm.value).subscribe((res)=>{

console.log(res);
alert('Employee have been successfully updated');
this.ngZone.run(()=>this.router.navigateByUrl('/employee-list'));


})
}

}
