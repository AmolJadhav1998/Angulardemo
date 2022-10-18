import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampname:string="";
  public link:string="";
  // two way data binding
  public fullname:string="ganesh";

  constructor() { }

  ngOnInit(): void {
    // interpolation or string interpolation
    this.sampname="This is Interpolation Binding Output";
    // property or attribute binding
     this.link = "https://www.google.com/"
  }
  // event Binding
  clickevent(){
    console.log("Hi I am Amol Jadhav");
  }

}

