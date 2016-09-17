import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[favoriteMedia]'
})
export class FavoriteMediaItemDirective {
    defaultColor: string = 'red';

    @Input() set color(colorName: string) {
        this.defaultColor = colorName || this.defaultColor;
    }

    @Input() favoriteMedia: boolean;

    constructor(private renderer: Renderer, private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.favoriteMedia ? 'yellow' : this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    @HostListener('mouseup') onMouseUp() {
        this.highlight(null);
    }

    highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
}