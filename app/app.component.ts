import { Component } from '@angular/core';

@Component({
    selector: 'fav-medias',
    template: `
        {{pageTitle}}
        <media-item></media-item>
    `
})
export class AppComponent {
    pageTitle: string = 'Meus Filmes e Séries Favoritos';
}