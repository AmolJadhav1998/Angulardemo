import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
   public data : string="";
   public link :string="";
   public name : string="AMol";

  constructor() { }

  ngOnInit(): void {
    this.data="This is interpolation";
     this.link="https://www.google.com/";
  }
  clickevent(){
    console.log("Hi every One");
  }

}
