import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component'

const appRoutes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'watch/:id',
    component: VideoListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
