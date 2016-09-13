import { Component } from '@angular/core';
@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item.component.html'
})
export class MediaItemComponent {
    mediaItem: any = {
        name: 'Procurando Dory', 
        year: 2016, 
        genre: "Animação", 
        category: 'Filme', 
        isFavorite: true
    };

    onClick() {
        console.log('clicou');
    }
}