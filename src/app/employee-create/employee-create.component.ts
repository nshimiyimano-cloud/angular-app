import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {



employeeForm:FormGroup;


  constructor(public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService:CrudService
    ) {




      this.employeeForm=this.formBuilder.group({
firstName:[''],
lastName:[''],
location:[''],
age:[],
salary:[],
email:[''],
phone:['']




      })


    }

  ngOnInit():void{


  }

//submit to create employee


  onSubmit():any{
this.crudService.addEmployee(this.employeeForm.value)
.subscribe((res)=>{
  console.log('data added success fully')
 alert('Employee have been successfully sent')
  this.ngZone.run(()=>this.router.navigateByUrl('/employee-list'))
},(err)=>{
  console.log(err);
})


  }



}



