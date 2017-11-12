import { Directive, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appBtnAddCart]'
})
export class BtnAddCartDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    let elem = $(this.el.nativeElement);
    let maskLayer = $(`<div class='adding-to-cart-mask-layer'></div>`);

    elem.append(maskLayer);
    maskLayer.css({
      position: "fixed",
      left: maskLayer.offset().left,
      top: maskLayer.offset().top - 30,
      "background-color": "#c9302c",
      width: "30px",
      height: "30px",
      "border-radius": "30px"
    }).animate({
      top: 0,
      right: 0,
      opacity: 0.2,
    }, 'slow', () => {
      maskLayer.remove();
      elem.removeClass('adding-to-cart');
    });
    elem.addClass('adding-to-cart');
  }

}
