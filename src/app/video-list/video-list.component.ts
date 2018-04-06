import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model'
import { VideoService } from '../video.service'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit {
  videos:Video[] = [];

  constructor(private service:VideoService) {
    this.videos = VideoService.searchResults;
  }

  ngOnInit() {
    this.service.searchVideos();
  }

}
