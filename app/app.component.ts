import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <media-item-list></media-item-list>
    `
})
export class AppComponent {
    pageTitle: string = 'Meus Filmes e Séries Favoritos';    
}