import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value);
    console.log(args);
    // var result = value/args[0];
    var result="MR." +value;
    return result;
  }

}
