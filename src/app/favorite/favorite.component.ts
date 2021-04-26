import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';




@Component({
  selector: 'favorite',
 /*  template: `

  <span><mat-icon>star_border</mat-icon></span>
  <courses></courses> <!-- from CourseComponent we import in in FavoriteComponent -->

  `, */
   templateUrl: './favorite.component.html',

  styleUrls: ['./favorite.component.css'],   //other way to make field as input property without use @input decorator
 // inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {

//to make this isFavorite as input to be public api component used every where as we use this again in app.comp.html do this to maintain reusabilty on component


//we want 'is-favorite'  be as alias or nick name of 'isFavorite' input field/property
@Input("is-favorite")isFavorite:boolean=true;  //in this component we see full start becouse is Fav=true but in app.compo.ts if we set false in app.com.html we see empty star

//isFavorite:boolean=true;            //here we not use Inpu dec becouse we list this field as input property in @component metadata as 2nd way without use @input deco


//output wprk on events

@Output() mychange=new EventEmitter()

constructor() { }

  ngOnInit(): void {
  }


  //method to do as toggle on this star
  onClick(){
     this.isFavorite=!this.isFavorite;
    //to publish or rise event
    this.mychange.emit({newValue:this.isFavorite});
  }

}
export interface FavoriteChangeEventArgs{
  newValue:boolean;
}
