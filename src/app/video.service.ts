import { Injectable } from '@angular/core';
import { youtubeAPIKey } from './api-keys'
import { Video } from './models/video.model'

@Injectable()
export class VideoService {

  parameters:string[] = [];
  static searchResults:Video[] = [];

  constructor() {}

  addParam(paramName, value) {
    this.parameters.push(`${paramName}=${value}`);
  }

  buildURL() {
    let url = 'https://www.googleapis.com/youtube/v3/search?'
    this.parameters.forEach((param) => {
      url += param + '&';
    });
    return url;
  }

  getPromise(url) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (request.status === 200) {
          let response = JSON.parse(request.response);
          resolve(response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  makeCall(resolve, reject) {
    this.addParam('part', 'snippet');
    this.addParam('type', 'video');
    this.addParam('maxResults', '25');
    this.addParam('key', youtubeAPIKey.key);
    let url = this.buildURL();
    this.parameters = [];
    let promise = this.getPromise(url);
    promise.then(resolve, reject);
  }

  searchVideos() {
    VideoService.searchResults.length = 0;
    this.makeCall(data => {
      data.items.forEach(video => {
        VideoService.searchResults.push(new Video(video));
      });
    }, error => {
      console.log(error);
    });
  }

}
