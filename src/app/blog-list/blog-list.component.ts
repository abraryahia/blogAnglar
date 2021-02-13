import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs:Blog[]=[];
  img="assets/image/blogBG1.jpg";
  constructor(public BlogService:BlogService) { }

  ngOnInit(): void {
    this.BlogService.getAll().subscribe(
          d=>this.blogs=d
        )
  }

}





