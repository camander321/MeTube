export class Video {
  id:string;
  title:string;

  constructor(rawData){
    this.id = rawData.id.videoId;
    this.title = rawData.snippet.title;
    //console.log(rawData);
  }
}
