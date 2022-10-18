import { Component, OnInit } from '@angular/core';
import { PromiseServiceService } from '../promise-service.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  userdata_arr:any=[]

  constructor(private prom:PromiseServiceService) {}

  ngOnInit(): void {
    this.getdataFromPromise()
  }
  
  getdataFromPromise(){
    this.prom.getdatafrombackend()
    .then((res:any)=>{
      this.userdata_arr = res;
      console.log(res)
    })
    .catch((err:any)=>{
      console.log(err);
    })
}
}
