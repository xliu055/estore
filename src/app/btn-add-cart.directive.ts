import { Directive, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appBtnAddCart]'
})
export class BtnAddCartDirective {
  
  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    debugger;
    let elem = $(this.el.nativeElement);
    // let maskLayer = $(`<div class='adding-to-cart-mask-layer'></div>`);

    // elem.append(maskLayer);
    // maskLayer.css({
    //   position: "fixed",
    //   left: maskLayer.offset().left,
    //   top: maskLayer.offset().top - 30,
    //   "background-color": "#c9302c",
    //   width: "30px",
    //   height: "30px",
    //   "border-radius": "30px"
    // }).animate({
    //   top: 0,
    //   right: 0,
    //   opacity: 0.2,
    // }, 'slow', () => {
    //   maskLayer.remove();
    //   elem.removeClass('adding-to-cart');
    // });
    // elem.addClass('adding-to-cart');

    elem.addClass('is-added').find('path').eq(0).animate({
      //draw the check icon
      'stroke-dashoffset':0
    }, 300, function(){
      setTimeout(function(){
        debugger;
        //updateCart();
        elem.removeClass('is-added').find('em').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //wait for the end of the transition to reset the check icon
          elem.find('path').eq(0).css('stroke-dashoffset', '19.79');
          //animating =  false;
        });

        if( $('.no-csstransitions').length > 0 ) {
          // check if browser doesn't support css transitions
          elem.find('path').eq(0).css('stroke-dashoffset', '19.79');
          //animating =  false;
        }
      }, 600);
    });	
  }

}
