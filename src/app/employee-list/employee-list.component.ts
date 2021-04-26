import { Component, NgZone,AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { CrudService } from '../service/crud.service';





/*
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
displayedColumnsData:string[]=['position', 'name', 'weight'];

dataSource =new MatTableDataSource(ele);

@ViewChild(MatSort) sort:any;
@ViewChild(MatPaginator) paginator:any;

ngAfterViewInit(){
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;

} */






//my column interface to implement table in angular material not used
export interface EmployeeColumns{
  _id:String,
  firstName:String,
  lastName:String,
  location:String,
  age:Number,
  salary:Number,
  email:String,
  phone:String
}





@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})









export class EmployeeListComponent implements AfterViewInit {


employees!:MatTableDataSource<EmployeeColumns>;
//employees:any=[] //here used when no mat table
displayedColumns: string[] = ['_id','firstName', 'lastName', 'location','salary','age','phone','email','options'];
//displayeColumns=string[]=['_id','firstName', 'lastName', 'location','salary','age','phone','email'];
  @ViewChild(MatPaginator) paginator:any;
  @ViewChild(MatSort) sort:any;

  public doFilter = (d:any) => {
    //console.log(d)
    this.employees.filter = d.value.trim().toLocaleLowerCase();
  }

  public oncheckkeyuptarget($target:any){
    console.log($target.target.value)
  }
  public onKeyUp(mail:string){/on template variable make it easy instead of use $event pass reference in html by use #var */
    console.log(mail)
  }

  // to way date binding here you can use [(ngModel)]="var from your component" or [value]="var from comp" (keyup)="email=$event.target.value;onKeyUp() //expression then call onkeyUp()"
 email="njeanluc@gmail.com";

public onkeyUp(){
  console.log(this.email);
} 


  constructor(private crudService:CrudService,private router:Router,private ngZone:NgZone) { }
  ngAfterViewInit(): void {

    this.crudService.getEmplyees()
    .subscribe((res:any)=>{

      console.log(res);
//this.employees=res; //this is for not material table
this.employees=new MatTableDataSource(res);


this.employees.paginator=this.paginator;
this.employees.sort=this.sort;

    });
  }

  onDelele(id:any,i?:any){

    console.log(id);

    if(window.confirm('Do you want to go ahead')){
this.crudService.deleteBook(id).subscribe((res)=>{
 //this.employees.splice(i,1);   //even not this no problem

this.ngZone.run(()=>this.router.navigateByUrl('/employee-list'))


})


    }
  }



}
