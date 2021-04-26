import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',  //remove suffix app be only 'like'
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})


export class LikeComponent {
//we remove constructor and ngOninit here because we don't need it

//our property
@Input('likesCount') likesCount!:number;
@Input('isActive') isActive!:boolean;

//onclick event

onClick(){
  this.likesCount+=(this.isActive)? -1:1;
  //then work toggle
  this.isActive=!this.isActive; //means if you click on it again remove like
 }

}
