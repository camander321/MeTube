import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css'],
  providers: [FirebaseService]
})
export class ListCommentsComponent implements OnInit {
  @Input() videoId;
  now:number;

  comments:FirebaseListObservable<any[]>;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.comments = this.firebaseService.getComments(this.videoId);
    this.now = Date.now();
  }

  addComment(commentText) {
    commentText = commentText.trim();
    if(commentText.length > 0) {
      let newComment = {
        content: commentText,
        timestamp: Date.now()
      }
      this.comments.push(newComment);
      this.now = Date.now();
    }
  }

  getElapsedTime(timestamp) {
    let elapsed:number = this.now - timestamp;
    if (elapsed >= 31536000000) {
      return `${Math.floor(elapsed / 31536000000)} years ago`;
    } else if (elapsed >= 2628000000) {
      return `${Math.floor(elapsed / 2628000000)} months ago`;
    } else if (elapsed >= 86400000) {
      return `${Math.floor(elapsed / 86400000)} days ago`;
    } else if (elapsed >= 3600000) {
      return `${Math.floor(elapsed / 3600000)} hours ago`;
    } else if (elapsed >= 60000) {
      return `${Math.floor(elapsed / 60000)} minutes ago`;
    } else if (elapsed > 1000) {
      return `${Math.floor(elapsed / 1000)} seconds ago`;
    } else {
      return "just now"
    }
  }
}
