import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html'
})
export class MediaItemComponent {
    
    @Input() mediaItem;

    @Output() favorited = new EventEmitter();

    onFavorite() {
        this.favorited.next(this.mediaItem);
    }
}