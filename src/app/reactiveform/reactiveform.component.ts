import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
myForm:any=FormGroup;
reg:any=[];
i:any;
isFormSubmitted:boolean= false;
  showtable: boolean=false;
  showUpdate:boolean=false
  firstName: any;
  constructor() {}

  ngOnInit(): void {
  }

  get f(){
    return this.myForm.controls;
  }
  onSubmitForm(sub:any){
    this.reg.unshift(sub.value)
    if(this.reg.length>0){
      this.showtable = true
    }
  }
 
  onSubmitReactiveForm(){
    console.log("Hello");
    
    console.log(this.myForm.value);
    this.isFormSubmitted = true;
    this.reg.push(this.myForm.value);
    console.log(this.reg);
  }
onDelete(i:any){
  this.reg.foreach((elem:any)=>{
    if(i.fname == elem.fname)
{
  this.i = this.reg.indexof(i)
  this.reg.splice((this.i),1); 
}
})
}
onEdit(edt:any){
  this.firstName=edt.fname
  this.i=this.reg.indexof(edt)
   this.showUpdate = true
}
onUpdateForm(upf:any){
  console.log(upf.value)
  this.reg.splice(this.i,1,upf.value)
  this.showUpdate=false
}

}
