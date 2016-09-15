import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <media-item (favorited)='onFavorite($event)' [mediaItem]='firstMediaItem'></media-item>
    `
})
export class AppComponent {
    pageTitle: string = 'Meus Filmes e Séries Favoritos';
    
    firstMediaItem: any = {
        name: 'Procurando Dory 2', 
        year: 2016, 
        genre: "Animação", 
        category: 'Filme', 
        isFavorite: true
    };

    onFavorite(mediaItem) {
        console.log(`O ${mediaItem.category} foi alterado: ${mediaItem.name}`);
        this.firstMediaItem.isFavorite = !this.firstMediaItem.isFavorite;
    }
}