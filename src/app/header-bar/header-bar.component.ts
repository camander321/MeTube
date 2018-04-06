import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  providers: [VideoService]
})
export class HeaderBarComponent implements OnInit {

  constructor(private router:Router, private service:VideoService) { }

  ngOnInit() {
  }

  search(searchString:string) {
    this.service.addParam('q', searchString);
    this.service.searchVideos();
    this.router.navigate(['']);
  }
}
