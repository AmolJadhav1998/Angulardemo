import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  age:number=15;
  Showdata:boolean=false;
  student:any=["amol","Ravi","kiran","Danraj","Suraj"];
  edu:any=3;


  constructor() { }

  ngOnInit(): void {
  }

  
}
