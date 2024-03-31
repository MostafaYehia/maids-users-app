import { Directive, ElementRef, OnInit, inject } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]',
  standalone: true
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {

  element: ElementRef = inject(ElementRef);

  ngOnInit() {

    // avoid error on ssr for window object is not defined
    if (!this.isPlatformBrowser()) return;

    this.animateIn();
  }

  protected override animateIn() {
    this.timeline.from(this.element.nativeElement, { opacity: 0, duration: this.duration, delay: this.delay });
    super.animateIn();
  }
}