import { Pipe, PipeTransform } from '@angular/core';
import {Pass} from "../classes/Pass";

@Pipe({
  name: 'PassTypeFilter'
})

export class PassTypeFilter implements PipeTransform {
  transform(items: Pass[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.type.toLowerCase() == searchText;
    });
  }
}
