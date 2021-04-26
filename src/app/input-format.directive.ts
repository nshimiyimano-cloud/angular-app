import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective  {
@Input('appInputFormat') format:any;
  //as better practice is better to put constructor before all methods
constructor(private el:ElementRef){

  }

  //if we focus on dem el direct use this method


@HostListener('blur')  onBlur(){
// is for show how it work console.log('onfocus')

//let we implement logic to change letter to lower case after go out side of this field/input
//first of all we read value of this host/input element
let value:string=this.el.nativeElement.value;

if(this.format=='lowercase')
this.el.nativeElement.value=value.toLowerCase();  //this runned well

else
this.el.nativeElement.value=value.toUpperCase();  //this runned well


  }





}
