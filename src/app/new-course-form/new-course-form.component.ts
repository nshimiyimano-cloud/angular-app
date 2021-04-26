import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {


form=new FormGroup({
//container of all topics

topics:new FormArray([])



})


 /*
constructor(fb:FormBuilder){

fb.group({

  topics:fb.array([])  //this is as above without with formBuilder and this class used to build a form
})
}

*/

addTopic(topic:HTMLInputElement){
this.topics.push(new FormControl(topic.value))
topic.value="";


}


removeTopic(topic:any){

let index=this.topics.controls.indexOf(topic);
this.topics.removeAt(index)
}
get topics(){
  return this.form.get('topics') as FormArray;
}

}
