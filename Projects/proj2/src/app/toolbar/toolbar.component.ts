import { Component, OnInit } from '@angular/core';

const tools = [
  'clothes',
  'shoes', 
  'accessories'
]

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  toolbarTitle = tools;
  constructor() { }

  ngOnInit(): void {
  }

}
