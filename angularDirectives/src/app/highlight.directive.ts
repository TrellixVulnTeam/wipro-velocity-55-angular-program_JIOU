import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'Yellow'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('50px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('20px');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.fontSize = color;
  }


}
