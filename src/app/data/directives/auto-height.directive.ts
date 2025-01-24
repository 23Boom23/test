import { Directive, ElementRef, EventEmitter, HostListener, inject, input, Output, Renderer2 } from '@angular/core'

@Directive({
  selector: '[o2kAutoHeight]',
  standalone: true
})
export class AutoHeightDirective {
  #element = inject(ElementRef).nativeElement
  #r2 = inject(Renderer2)

  bottomOffset = input<number>(20)
  overflowScroll = input<boolean>(false)

  @Output() heightSet = new EventEmitter()

  constructor() {
    setTimeout(() => {
      this.adjustHeight()
    })
  }

  adjustHeight() {
    const top = this.#element.getBoundingClientRect().top ?? 0
    this.#r2.setStyle(
      this.#element,
      'height',
      `${window.innerHeight - top - this.bottomOffset()}px`
    )
    this.heightSet.emit(window.innerHeight - top - this.bottomOffset())

    if (this.overflowScroll()) {
      this.#r2.setStyle(this.#element, 'overflow', 'scroll')
    }
  }

  @debounce(50)
  @HostListener('window:resize')
  onResize() {
    this.adjustHeight()
  }
}

export function debounce(delay: number = 300): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const timeoutKey = Symbol()

    const original = descriptor.value

    descriptor.value = function (...args: any[]) {
      //@ts-ignore
      clearTimeout(this[timeoutKey])
      //@ts-ignore
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay)
    }

    return descriptor
  }
}

