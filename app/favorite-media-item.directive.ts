import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[favoriteMedia]'
})
export class FavoriteMediaItemDirective {
    defaultColor: string = 'yellow';

    @Input() set color(colorName: string) {
        this.defaultColor = colorName || this.defaultColor;
    }

    @Input() favoriteMedia: boolean;

    constructor(private renderer: Renderer, private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.favoriteMedia ? 'lightblue' : this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}