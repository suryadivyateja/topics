import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
name ="surya";
today = new Date();
hide = 'show';
arr=[
  {name:'arun',age:18, country:'IN'},
  {name:'rahul',age:22,country:'US'},
  {name:'ketan',age:25,country:'UK'},
  {name:'santosh',age:24,country:'EUR'}
];
  ngOnInit() {
  }
show(){
this.hide = 'hide';
console.log(this.hide);
}
}
