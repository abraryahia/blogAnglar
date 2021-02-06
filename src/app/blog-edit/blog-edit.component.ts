import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  Eblog!: Blog;

  edit() {
    this.BlogService.editOne(this.Eblog._id!, this.Eblog).subscribe(
      d => {
        // this.Eblog=d
        console.log(this.Eblog);        
        this.route.navigateByUrl("/blog/list")
      }
    )
  }

  constructor(private BlogService: BlogService, private route: Router, private ar: ActivatedRoute) { }

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
        this.Eblog = d;

      }
    )

    // this.BlogService.editOne(id, this.Eblog).subscribe(a => {
    //   console.log(id, this.Eblog)
    // })
  }
}



