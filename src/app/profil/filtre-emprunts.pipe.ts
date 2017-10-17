import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {Emprunt} from './emprunt.interface';
import {Article} from './article.interface';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class FiltreEmpruntPipe implements PipeTransform {

  transform(items: Emprunt[], filter: Emprunt): Emprunt[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Emprunt) => this.applyFilter(item, filter));
  }

  applyFilter(emprunt: Emprunt, filter: Emprunt): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (emprunt[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (emprunt[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }


}
