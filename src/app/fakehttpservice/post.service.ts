import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class PostService{
rootUrl='http://jsonplaceholder.typicode.com/posts';
posts:any;
constructor (public http:HttpClient){





  this.http.get(this.rootUrl)
  .subscribe(response=>{
this.posts=response;

  })

}
createPost(post:any){
this.http.post(this.rootUrl,post).subscribe(response=>{

alert('post created successfully');

})


}


deleteData(id:any){

this.http.delete(this.rootUrl+'/'+id)
.subscribe(response=>{
  alert('post deletion successfully now')
},(error:Response)=>{
//hundle expected error but this implementation no where they meet with app

if(error.status===404){
  alert('expected err:post already deleted!');
}
else{
  alert('an expected Error occured');
}



})

}





}
