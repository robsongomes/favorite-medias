import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[favoriteMedia]'
})
export class FavoriteMediaItemDirective {

    constructor(renderer: Renderer, ef: ElementRef) {
        renderer.setElementStyle(ef.nativeElement, 'backgroundColor', 'yellow');
    }
}