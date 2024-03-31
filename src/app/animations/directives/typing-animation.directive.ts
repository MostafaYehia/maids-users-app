import { Directive, ElementRef, Input, OnInit, inject, input } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';
import SplitType, { TargetElement } from 'split-type';

@Directive({
  selector: '[typingAnimation]',
  standalone: true
})
export class TypingAnimationDirective extends CoreAnimationDirective implements OnInit {

  @Input() stagger = 0.09;

  element: ElementRef = inject(ElementRef);

  ngOnInit(): void {

    // avoid error on ssr for window object is not defined
    if (!this.isPlatformBrowser()) return;

    this.animateIn();
  }

  protected override animateIn() {
    this.timeline
      .fromTo(this.splitText(this.element.nativeElement).chars, { opacity: 0 },
        { opacity: 1, duration: this.duration, stagger: this.stagger }
      );
    super.animateIn();
  }


  private splitText(target: TargetElement): SplitType {
    return new SplitType(target, { types: "chars,words" });
  }
}
