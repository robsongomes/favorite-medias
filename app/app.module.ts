import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteMediaItemDirective } from './favorite-media-item.directive'
  
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, MediaItemComponent, MediaItemListComponent, FavoriteMediaItemDirective ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }