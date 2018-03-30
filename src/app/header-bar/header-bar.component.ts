import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  providers: [VideoService]
})
export class HeaderBarComponent implements OnInit {

  constructor(private service:VideoService) { }

  ngOnInit() {
  }

  search(searchString:string) {
    this.service.addParam('q', searchString);
    this.service.searchVideos();
  }
}
