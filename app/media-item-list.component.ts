import { Component } from '@angular/core';

@Component({
    selector: 'media-item-list',
    templateUrl: 'app/media-item-list.component.html'
})
export class MediaItemListComponent {

    onFavorite(mediaItem) {
        console.log(`O ${mediaItem.category} foi alterado: ${mediaItem.name}`);
        mediaItem.isFavorite = !mediaItem.isFavorite;
    }

    mediaItems = [
        {
            name: 'Procurando Dory', 
            year: 2016, 
            genre: "Animação", 
            category: 'Filme', 
            isFavorite: true
        },
        {
            name: 'X-Men Apocalipse', 
            year: 2016, 
            genre: "Ficção", 
            category: 'Filme', 
            isFavorite: false
        },
        {
            name: 'Invocação do Mal 2', 
            year: 2016, 
            genre: "Terror", 
            category: 'Filme', 
            isFavorite: false
        },
        {
            name: 'Deadpool', 
            year: 2016, 
            genre: "Ficção", 
            category: 'Filme', 
            isFavorite: true
        }
    ]
}