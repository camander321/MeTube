import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

@Injectable()
export class FirebaseService {
  comments: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.comments = database.list('gimmeCash/projects');
  }

  getComments(videoId:string) {
    return this.database.list(`comments/${videoId}`);
  }

  addComment(videoId:string, comment) {
    this.database.list(`comments/${videoId}`).push(comment);
  }
}
