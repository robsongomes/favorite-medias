import { Component } from '@angular/core';

@Component({
    selector: 'media-item-list',
    templateUrl: 'app/media-item-list.component.html'
})
export class MediaItemListComponent {

    onFavorite(mediaItem) {
        console.log(`O ${mediaItem.category} foi alterado: ${mediaItem.name}`);
    }

    mediaItems = [
        {
            name: 'Procurando Dory', 
            year: 2016, 
            genre: "Animação", 
            category: 'Filme',
            description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação', 
            isFavorite: true
        },
        {
            name: 'X-Men Apocalipse', 
            year: 2016, 
            genre: "Ficção", 
            category: 'Filme', 
            description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação',
            isFavorite: false
        },
        {
            name: 'Invocação do Mal 2', 
            year: 2016, 
            genre: "Terror", 
            category: 'Filme',
            description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação', 
            isFavorite: false
        },
        {
            name: 'Deadpool', 
            year: 2016, 
            genre: "Ficção", 
            category: 'Filme', 
            description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação',
            isFavorite: true
        }
    ]
}