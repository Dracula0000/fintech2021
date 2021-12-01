import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatddmmyyyy'
})
export class dateFormatddmmyyyy implements PipeTransform {
  transform(items: number, date : '[dd/MM/YYYY]') {
    return items;
  }
}
