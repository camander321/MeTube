import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SuggestedVideoComponent } from './suggested-video/suggested-video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SuggestedVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
