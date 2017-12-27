import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coachNo'
})
export class CoachNoPipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) return items;
    return items.filter(function(items){
      return items.coach_no.toLowerCase().includes(search.toLowerCase());
    })
  }

}


