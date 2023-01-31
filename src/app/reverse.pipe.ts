import { Pipe, PipeTransform } from '@angular/core';
import { resolvePtr } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let revStr="";
    for(let char of value)
    {
      revStr= char + revStr;
    }
    return revStr
  }

}
