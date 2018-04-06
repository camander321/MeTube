import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ShowVideoComponent } from './show-video/show-video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SideMenuComponent,
    VideoListComponent,
    ShowVideoComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
