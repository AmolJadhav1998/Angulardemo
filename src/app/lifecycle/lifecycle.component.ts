import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {
example:any="This is example";
  
  constructor() {
    console.log("This is Constructor");
   }
  ngAfterContentChecked(): void {
    console.log("This is AfterContentChecked method");

  }
  ngOnDestroy(): void {
    console.log("This is OnDestroy Method");

  }
  ngAfterViewChecked(): void {
    console.log("This is ngafterViewChecked Method");

  }
  ngAfterViewInit(): void {
    console.log("This is ngafterViewInit Method");

  }
  ngAfterContentInit(): void {
    console.log("This is ngaftercontentInit Method");
  }
  ngDoCheck(): void {
    // this.example="This Is Angular";
    console.log('This is Docheck Method ');
  }
  ngOnChanges(): void {
    console.log('This is Onchange Method ');
  }

  ngOnInit(): void {
    console.log('This is Oninit Method ');

  }

}
