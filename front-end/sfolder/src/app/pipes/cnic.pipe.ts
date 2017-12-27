import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnic'
})
export class CnicPipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) 
      return items;
      
    return items.filter(function(items){
      return items.cnic.toLowerCase().includes(search.toLowerCase());
    })
  }

}
