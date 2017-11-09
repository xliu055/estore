import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCart } from '../models/shoppingcart';

// scmd -- Shopping cart menu desplay
@Pipe({
  name: 'scmd'
})
export class ScmdPipe implements PipeTransform {

  transform(value: ShoppingCart): string {
    return `${value.totalCount} Item${value.totalCount == 1 ? "" : "s"} - $${value.totalPrice}`;
  }

}
