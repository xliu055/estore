import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Promise } from 'bluebird';

@Directive({
  selector: '[appBtnAddCart]'
})
export class BtnAddCartDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    let elem: JQuery<HTMLElement> = $(this.el.nativeElement);

    let checkIcon = elem.addClass('is-added').find('path').eq(0);
    this.drawIcon(checkIcon).then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 600);
      });
    }).then(() => {
      return new Promise((resolve, reject) => {
        elem.removeClass('is-added').find('em').on('transitionend', () => {
          resolve();
        });
      })
    }).then(() => {
      elem.find('path').css('stroke-dashoffset', '19.79');
    });

  }

  private drawIcon(elementRef: JQuery<HTMLElement>): Promise<any> {
    return new Promise((resolve, reject) => {
      elementRef.animate({
        'stroke-dashoffset': 0
      }, 300, () => {
        resolve();
      });
    });
    
  }

}
