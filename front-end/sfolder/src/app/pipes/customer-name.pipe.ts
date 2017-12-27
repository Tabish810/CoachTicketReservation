import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerName'
})
export class CustomerNamePipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) return items;
    return items.filter(function(items){
      return items.customer_name.toLowerCase().includes(search.toLowerCase());
    })
  }
  

}
