import { DOCUMENT } from '@angular/common'
import { Attribute, Directive, ElementRef, Inject, Output } from '@angular/core'
import { Observable, fromEvent } from 'rxjs'
import { filter, map, skip } from 'rxjs/operators'

@Directive({
  selector: '[o2kClickOut]',
  standalone: true
})
export class ClickOutDirective {
  @Output()
  readonly o2kClickOut!: Observable<boolean>

  constructor(
    @Inject(ElementRef) private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Attribute('reactFirstClick') private reactFirstClick: string | null
  ) {
    this.o2kClickOut = fromEvent(this.document, 'click').pipe(
      map((event) => {
        return !this.elRef.nativeElement.contains(event.target)
      }),
      filter((isClickOut) => isClickOut == true),
      skip(this.reactFirstClick ? 0 : 1)
    )
  }
}
