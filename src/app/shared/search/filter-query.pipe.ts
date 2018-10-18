import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQueryPipe'
})
export class FilterQueryPipe implements PipeTransform {

  transform(list: any, query?: string, key?: string): any {
  	if(query) {
  		if(key) {
  			return list.filter(item => item[key].toLowerCase().indexOf(query.toLowerCase()) != -1);
  		} else {
  			return list.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) != -1);
  		}
  		
  	} else {
  		return list;
  	}
    
  }

}
