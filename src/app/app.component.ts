import { ViewChild,  Component,AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map,startWith} from 'rxjs/operators';
import {MatSnackBar} from "@angular/material/snack-bar"
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DataSource } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { AuthService } from './shared/auth.service';
import { environment } from 'src/environments/environment';


//data about table disp;layed in flex





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{

  course=[
    'mathematics',
    'biology',
    'geography',
    'chemistry'
      ]


      showSpinner=false;

      loadData(){
        this.showSpinner=true;
        setTimeout(()=>{

          this.showSpinner=false;
        },5000);
      }


      opened=false;  //to open sidebar

      //method to listen event of open sidenav&close display in console

      log(state:string){
        console.log(state);
      }

      /* methosd to display index of tab selected in console */
  logChange(tabIndex:any){
console.log(tabIndex)
}

//on select module to track selected option value
selectedValue:any;

//on auto complete

options:string[]=['angular','react','vue'];

objectOptions=[
 { name:'angular'},
{name:'react'},
 { name:'vue'},
 {name:'ionic'}
];


displayFn(subject:any){
  return subject ? subject.name : undefined;
}

//we use this to set min date and max which user can select in datepicker we use [min]="minDate"...in input

minDate=new Date();
maxDate=new Date(2021,8,10);

//to filter all saturday&sunday and disable it

dateFilter=(date:Date)=>{

  const day=date.getDay();
  return day !=0 && day!=6;
}

//what we used in scrolling implementation

numbers:number[]=[];


constructor(private snackBar:MatSnackBar,public dialog:MatDialog,public authService:AuthService){
  var num:number;
for(num=1;num<=700;num++){
  this.numbers.push(num)
}

}

title="study angular";
openSnackBar(message:string,action?:string){ /* you can use Undo,Dismis,Dance i see both are th same */
var snackBarRef=this.snackBar.open(message,action,{
  duration:2000
}

);

 snackBarRef.afterDismissed().subscribe(()=>{
  console.log('snackbar dismissed')
})


snackBarRef.onAction().subscribe(()=>{
  console.log('snack bar action was triggered')
})




}

//method to open custom snackbar with component

openCustomSnackBar(message:string,action:string){
  this.snackBar.openFromComponent(CustomSnackBarComponent,{duration:2000});
}

openDialog(){
//to access this data we go in dialog-example.component.ts
var dialogRef=this.dialog.open(DialogExampleComponent,{data:{firstName:'nshumiyimana',lastName:'jeanluc'}});  //next to pass data in open() as 2nd parameter
dialogRef.afterClosed().subscribe((result)=>{
  console.log(`dialog result ${result}`);
})



}


logout() {
  this.authService.doLogout()
}









//then create form control here to link to the input element
//myControl=new FormControl();
/* filteredOptions:Observable<string[]>

 constructor(t:Observable<string[]>,mycontrol:FormControl){
  this.filteredOptions=t;


} */





/*
ngOnInit(){



this.filteredOptions=this.myControl.valueChanges.pipe(startWith(''),
map(value=>this._filter(value))
);

}

public _filter(value:string):string[]{
const filterValue=value.toLowerCase();
return this.options.filter(option=>option.toLowerCase().includes(filterValue))
}
 */



//additional function to display our selected option in input to not get [object object] in input



//codes about table display in flex in app.component.html

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
displayedColumnsData:string[]=['position', 'name', 'weight'];

dataSource =new MatTableDataSource(ELEMENT_DATA);

@ViewChild(MatSort) sort:any;
@ViewChild(MatPaginator) paginator:any;

ngAfterViewInit(){
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;

}





logData(row:any){
  console.log(row);
}







applyFilter(filterValue:any){


this.dataSource.filter=filterValue.trim().toLowerCase();
console.log(filterValue);
}





//to be used in app.comp.html from favoritecomponent as reusin compon every where

 post={
  isFavorite:false
}

onFavoriteChanged(eventArgs:FavoriteChangeEventArgs){  //we import this type interface
  console.log('favorite changed',eventArgs);
}

//to implement our like
tweet={
  body:'some post here',
isLiked:true, //if current user liked it
likesCount:10
}



//logic to make switchcase to tab here we specify default current tab


viewMode="other";

other="other";
list="list";
map="map";



backgroungColor=environment.navBarBackgroungColor;


}



@Component({

selector:"custom-snackbar",
template:"<span style='color:orange;border-bottom:1px solid #fff'>this is custom snack bar</span>"

})






export class CustomSnackBarComponent{

}






