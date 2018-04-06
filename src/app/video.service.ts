import { Injectable } from '@angular/core';
import { youtubeAPIKey } from './api-keys'
import { Video } from './models/video.model'

@Injectable()
export class VideoService {

  parameters:string[] = [];
  urlBase:string = '';
  static searchResults:Video[] = [];

  constructor() {}

  addParam(paramName, value) {
    this.parameters.push(`${paramName}=${value}`);
  }

  buildURL() {
    let url = this.urlBase;
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
    let url = this.buildURL();
    console.log(url);
    this.parameters = [];
    let promise = this.getPromise(url);
    promise.then(resolve, reject);
  }

  searchVideos(searchString) {
    VideoService.searchResults.length = 0;

    this.urlBase = 'https://www.googleapis.com/youtube/v3/search?';
    if (searchString && searchString.length > 0)
      this.addParam('q', searchString);
    this.addParam('part', 'snippet');
    this.addParam('type', 'video');
    this.addParam('maxResults', '25');
    this.addParam('key', youtubeAPIKey.key);

    this.makeCall(data => {
      data.items.forEach(video => {
        VideoService.searchResults.push(new Video(video));
      });
    }, error => {
      console.log(error);
    });
  }

  getVideoById(videoId, response) {
    VideoService.searchResults.length = 0;

    this.urlBase = 'https://www.googleapis.com/youtube/v3/videos?';
    this.addParam('part', 'player,snippet');
    this.addParam('id', videoId);
    this.addParam('key', youtubeAPIKey.key);

    this.makeCall(response, error => {
      console.log(error);
    });
  }
}
