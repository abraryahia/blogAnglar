import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { Comment } from '../_Models/comment';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  blog!: Blog;
  comment: Comment = new Comment("");


  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public route: Router) { }


  save() {
    this.BlogService.addComment(this.blog._id!, this.comment).subscribe(
      c => {
        this.blog = c
        console.log(c)
        // this.route.navigateByUrl('readBlog')
      }
    )
    location.reload();
    
  }

  ngOnInit(): void {
    let id = "";
    this.ar.params.subscribe(
      a => {
        console.log("from edit component");
        id = a['id']
        console.log(id);
      }
    )
    this.BlogService.getOne(id).subscribe(
      d => {
        console.log(d);
        console.log(this.comment);
        this.blog = d;

      }
    )

  }

}
