import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css'],
  providers: [VideoService]
})
export class ShowVideoComponent implements OnInit {

  videoId:string;
  embedHtml;
  videoSnippet;
  descShort:string = '';
  showFullDesc:boolean = false;

  constructor(public videoService: VideoService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private location: Location) {
    this.route.params.forEach((urlParameters) => {
      this.videoId = urlParameters['id'];
    });
  }

  ngOnInit() {
    this.videoService.getVideoById(this.videoId, data => {
      this.embedHtml = this.sanitizer.bypassSecurityTrustHtml(data.items[0].player.embedHtml);
      this.videoSnippet = data.items[0].snippet;
      this.descShort = this.videoSnippet.description.length < 100 ? this.videoSnippet.description : this.videoSnippet.description.slice(0, 96) + ' ...';
    });
  }
}
