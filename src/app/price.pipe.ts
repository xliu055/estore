import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, unit: string): string {
    // $ 1,234,567.00
    return unit + '' + value ;
  }
}
