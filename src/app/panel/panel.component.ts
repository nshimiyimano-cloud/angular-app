import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',   //to utilize ngContent in angul
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
