import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Input, Output, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[coCoreAnimation]',
  standalone: true
})
export class CoreAnimationDirective {

  @Input() duration = 1;
  @Input() delay = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();

  private platformId = inject(PLATFORM_ID);

  protected timeline: gsap.core.Timeline = gsap.timeline({
    onComplete: _ => this.complete.emit(),
    onReverseComplete: _ => this.reverseComplete.emit(),
    paused: true,
    reversed: true
  });
  

  protected animateIn() {
    if (this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }

  protected isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId)
  }
}
