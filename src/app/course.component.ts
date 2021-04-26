import { Component} from "@angular/core";


@Component({
selector:'courses',
template:`
<h1>{{getTitle()}} header</h1>
<p>{{text | summary:30}}</p>


<!----if else but if not ths give cond in one div and giv cond for other div -->

<button (click)=" loadCourses()">load course</button>
<div>
  <span [matBadge]="courses?.length" matBadgeColor="warn"   [matBadgeHidden]="courses.length==0" matBadgePosition="above after">Course Notifications</span>

</div>

<ul>
<li *ngFor="let c of courses"> {{c}} </li>
</ul>
<table class="table table-bordered" *ngIf="courses.length>0; else noCourses">
<tr><th>Index</th><th>Courses</th><th>description</th> <th>options</th> </tr>
<tr *ngFor="let c of courses;index as i; even as isEven;odd as isOdd">
<td>{{i}}</td>   <td>{{c}}</td>  <td> <span *ngIf="isEven"> course index is even</span> <span *ngIf="isOdd"> course index is odd</span> </td>  <td><button class="btn btn-success" (click)="onRemove(i)">remove course</button>  <button class="btn btn-success" (click)="onChange(i)">update</button>    </td>


</tr>


</table>


<ng-template #noCourses><div class="jumbotron"><h1 class="text-primary text-center">No courses found Yet</h1></div>

</ng-template>
<button class="btn btn-primary" (click)="onAdd()">add Course</button>
`


})

export class courseComponent{
  courses:string[]=[]; //if courses:string[]; this couse to return undefined and couse other next code to not run well as it has error but no err found


  loadCourses(){
    this.courses=[
'mathematics',
'biology',
'geography',
'chemistry'



  ]

  }
  onAdd(){
    this.courses.push('other course');
  }
  onRemove(index:number){
    this.courses.splice(index,1)
  }
  onChange(index:any){
    this.courses[index]="course change"
  }
  title='angulaar Courses List'

 getTitle(){
return this.title;


  }

  //we gonna summirize this text with custom pipe
  text='summary pipe Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing';

}
