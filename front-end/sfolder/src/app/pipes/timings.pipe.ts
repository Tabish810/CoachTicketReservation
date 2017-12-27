import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timings'
})
export class TimingsPipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) return items;
    return items.filter(function(items){
      return items.time.toLowerCase().includes(search.toLowerCase());
    })
  }

}
