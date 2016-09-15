import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html',
    styles: ['.media-item { padding-bottom: 20px; } .year {font-size: .7em; }']
})
export class MediaItemComponent {
    
    @Input() mediaItem;

    @Output() favorited = new EventEmitter();

    onFavorite() {
        this.favorited.next(this.mediaItem);
    }
}