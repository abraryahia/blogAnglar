import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { Comment } from '../_Models/comment';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-open-blog',
  templateUrl: './open-blog.component.html',
  styleUrls: ['./open-blog.component.css']
})
export class OpenBlogComponent implements OnInit {
  blog: Blog = new Blog("", "", [""]);
  comment: Comment = new Comment("");


  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public route: Router) { }
  save() {
    this.BlogService.addComment(this.blog._id!, this.comment).subscribe(
      c => {
        this.blog = c
        console.log(c)
        // this.route.navigateByUrl("/readBlog/{{this.blog._id}}")
      }
    )
  }

  ngOnInit(): void {
    let id = "";

    this.ar.params.subscribe(
      d => {
        id = d['id']
        console.log(d)

      }
    )
    this.BlogService.getOne(id).subscribe(
      a => {
        this.blog = a

      }
    )

  }

}
