import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.css']
})
export class Reactiveform2Component implements OnInit {

  myForm:any;
  array:any;
  isFormSubmitted:boolean= false;
  reg: any;
  fname:string="";
  lname:string="";
  email:string="";
  pass:string="";
  cpass:string="";
  showtable: boolean = false;
  showupdate: boolean = false;
  aindex: any;
  f:any;
  myform2:any;

  


  constructor(private fb: FormBuilder ) {


    this.myForm = this.fb.group({
      fname:['', [Validators.required]],
      lname:['', [Validators.required, Validators.maxLength(5)]],
      email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']
    })
   }

  ngOnInit(): void {
    
  }
  onSubmitForm(sub:any){
    this.array.unshift(sub.value)
    if(this.array.length>0){
      this.showtable = true
    }
  }
  public additem() {
    this.array.push(this.myForm.value)
    if (this.array.length > 0)
      this.showtable = true;
  }

  reset() {
    this.myForm.reset();
  }

  deletetdata(element: any) {
    this.array.forEach((value: any, index: any) => {
      if (value == element)
        this.array.splice(index, 1);
    });
}

editdata(element: any) {

  this.fname = element.name;
  this.lname = element.address;
  this.email = element.education;
  this.pass = element.gender;
  this.cpass = element.course;
  this.showupdate = true;
  this.showtable = true;

}
onupdate(myform2: any) {
  console.log(myform2.value);
  this.array.splice(this.aindex, 1, myform2.value)
  this.showupdate = false;
  this.showtable = true;

}
 

}
