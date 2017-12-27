import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) return items;
    return items.filter(function(items){
      return items.date.toLowerCase().includes(search.toLowerCase());
    })
  }
}
