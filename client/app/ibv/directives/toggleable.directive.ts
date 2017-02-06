import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[myToggleable]' })

export class ToggleableDirective implements OnChanges{
    @Input('myToggleable') isShowing: boolean;

    private el: ElementRef;
    
    constructor(el: ElementRef) {
       this.el = el;
    }

    ngOnChanges(changes) {
        // if the change happened in the isShowing property
        if (changes.isShowing) {
            console.log(this.el.nativeElement.style);
            if (this.isShowing) {
                // Logic to show the element
                this.el.nativeElement.style.display = "block";
                
            } else {
                // Logic to hide the element
                this.el.nativeElement.style.display = "none";
            }
        }
    }
}