import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggested-video',
  templateUrl: './suggested-video.component.html',
  styleUrls: ['./suggested-video.component.css']
})
export class SuggestedVideoComponent implements OnInit {
  @Input() videoId:string;

  constructor() { }

  ngOnInit() {
    console.log(this.videoId);
  }

}
