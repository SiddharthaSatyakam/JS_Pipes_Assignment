import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, nameRec: string): any {
    return value.sort((one, two) => (one[nameRec] < two[nameRec] ? -1 : 1));
  }

}
