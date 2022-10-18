import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
userdata:any;
  
  constructor( private myser : DataService) { 
    
    this.dataFromService();
    
    

  }
  
  ngOnInit(): void {
  }
   dataFromService(){
     this.myser.getData().subscribe(
      (res:any)=>
      {
        this.userdata=res;
        console.log(res);
      },
      (err:any)=>
      {
        console.log(err);
      }
     )
   
   }
}
