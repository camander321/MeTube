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
  embedHtmlSafe;
  videoSnippet;
  descShort:string = '';
  descFull:string = '';
  showFullDesc:boolean = false;

  constructor(public videoService: VideoService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private location: Location) {
    this.route.params.forEach((urlParameters) => {
      this.videoId = urlParameters['id'];
    });
  }

  setAutoPlay(html:string) {
    let index = html.indexOf('frameborder') - 2;
    let start = html.slice(0, index);
    let end = html.slice(index, html.length);
    return start + '?autoplay=1' + end;
  }

  ngOnInit() {
    this.videoService.getVideoById(this.videoId, data => {
      let embedHtml = data.items[0].player.embedHtml;
      embedHtml = this.setAutoPlay(embedHtml);
      this.embedHtmlSafe = this.sanitizer.bypassSecurityTrustHtml(embedHtml);
      console.log(data.items[0].player.embedHtml);
      this.videoSnippet = data.items[0].snippet;
      this.descFull = this.videoSnippet.description;
      if (this.descFull.length > 200) {
        this.descShort = this.descFull.slice(0, 194);
        this.descShort = this.descShort.slice(0, this.descShort.lastIndexOf(' '))
      } else {
        this.descShort = this.descFull;
      }
    });
  }
}
