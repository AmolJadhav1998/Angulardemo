import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjsop',
  templateUrl: './rxjsop.component.html',
  styleUrls: ['./rxjsop.component.css']
})
export class RxjsopComponent implements OnInit {

  constructor() { }
arry :any=[1,2,3,4,5,6];
datastream:any;
  ngOnInit(): void {

    this.datastream=of(1,2,3,4,5,6,7,8,9);
    // this.datastream = from(this.arry);

    console.log(this.datastream);
    console.log(this.arry);

    this.datastream.subscribe(
      (res:any)=>{console.log(res)},
      (err:any)=>{console.log(err)}
    );
    
    this.datastream.pipe(map((a:any)=>a*5),
                    filter((b:any)=> b % 2 ==0)).subscribe(
                    (res:any)=>{console.log(res)}
    )
    
  }

}
