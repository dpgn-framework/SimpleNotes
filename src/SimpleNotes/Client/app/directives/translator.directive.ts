import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[translator]'
})
export class TranslatorDirective {
    //@Input('translator')
    //translator: string;

    constructor(private element: ElementRef) {
    }

    @Input()
    set translator(value: string) {
        if (value)
            this.element.nativeElement.innerText = '?' + value + '?';
        else
            this.element.nativeElement.innerText = '';
    }
}