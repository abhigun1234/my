import { Component, OnInit } from '@angular/core';
import { CommentService } from '..//comment.service'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private comments: CommentService) { }

  ngOnInit() {
  }

  /*
  post comment 
  * */

  postData() {
    this.comments.addComment().subscribe(res => {

      console.log("data", res)
    })

  }

}
