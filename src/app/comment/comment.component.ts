import { Component, OnInit } from '@angular/core';
import { CommentService } from '..//comment.service'
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  constructor(private comments: CommentService,private fb:FormBuilder) { }
  commentForm=this.fb.group({id:[],userId:[],body:[],title:[]})
  ngOnInit() {
  }

  /*
  post comment 
  * */

  postData() {
   console.log("this.commentForm.valu",this.commentForm.value)
    this.comments.addComment(this.commentForm.value).subscribe(res => {

      console.log("data", res)
    })

  }

}
