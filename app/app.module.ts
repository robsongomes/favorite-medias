import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MediaItemComponent } from './media-item.component';
  
// Angular Material Modules
import { MdCardModule } from '@angular2-material/card'; 
import { MdButtonModule } from '@angular2-material/button'; 

@NgModule({
    imports:      [ BrowserModule, MdCardModule, MdButtonModule ],
    declarations: [ AppComponent, MediaItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }