import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livecoding',
  templateUrl: './livecoding.component.html',
  styleUrls: ['./livecoding.component.css']
})
export class LivecodingComponent implements OnInit {

  public livedata:string="This is String Interpulation Output"; //string interpulation/interpulation
  public link:string=""; // attribute binding
   public Fname:string="Amol"; //two way data binding
  constructor() { }

  ngOnInit(): void {
    // this.livedata="This is String Interpulation Output";
    this.link="https://www.google.com/";
  }
  clickevent(){
    console.log("This is Event Binding Output"); // event Binding
  }

}
