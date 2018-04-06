import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component'
import { ShowVideoComponent } from './show-video/show-video.component'

const appRoutes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'watch/:id',
    component: ShowVideoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
