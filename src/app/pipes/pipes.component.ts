import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  stext:string="Angular Pipes concept";
  courses:any=['BCA','MCA','MCS'];
  date1= new Date();
  data:any=[{fname:"Amol",lname:"Jadhav"},{fname:"Kiran",lanme:"Navale"}];
  salary:any=100000;

  constructor() { }

  ngOnInit(): void {
  }

}
