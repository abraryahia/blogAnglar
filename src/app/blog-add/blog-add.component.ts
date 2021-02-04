import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  nblog: Blog = new Blog(" ", " ", [""]);

  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public route: Router) { }

  save() {
    console.log("begin");
    console.log(this.nblog);
    this.BlogService.add(this.nblog).subscribe(
      d => this.route.navigateByUrl('blog'),
      e => console.log(e)

    )
  }

  ngOnInit(): void {
  }

}
