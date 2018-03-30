import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.model'
import { VideoService } from '../video.service'

@Component({
  selector: 'app-suggested-video',
  templateUrl: './suggested-video.component.html',
  styleUrls: ['./suggested-video.component.css'],
  providers: [VideoService]
})
export class SuggestedVideoComponent implements OnInit {
  @Input() videoId:string;

  suggestions:Video[] = [];

  constructor(private service:VideoService) {
    this.suggestions = this.service.searchResults;
  }

  ngOnInit() {
    this.service.searchVideos();
  }
}
