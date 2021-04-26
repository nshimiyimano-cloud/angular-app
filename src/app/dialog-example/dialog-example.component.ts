import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
//we need to import MAT_DIALOG_DATA injection which allows to receive any type of data & we inject it in constructor

import {MAT_DIALOG_DATA} from "@angular/material/dialog"
@Component({  
  selector: 'dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataObject:any) { }

  ngOnInit(): void {
  }

}
