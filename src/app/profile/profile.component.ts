import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  blogs:Blog[]=[];

  constructor(public BlogService:BlogService) { }

  ngOnInit(): void {
    this.BlogService.getme().subscribe(
          d=>this.blogs=d
        )
  }

}
