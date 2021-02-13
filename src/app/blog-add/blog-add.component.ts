import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { User } from '../_Models/user';
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  nblog: Blog = new Blog(" ", " ", [""], "");
  selectedFile!: File;
  addForm!: FormGroup;
  username: any;
  Blog = new FormData();
  user: User = new User("", "", "", "");
  userId: any;




  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public route: Router, public UserService: UserService, public fb: FormBuilder) {
    //  this.userId!=localStorage.getItem('access_id');
    this.UserService.getUser().subscribe(
      a => {
        this.user = a
        this.userId = a._id;
      }
    )
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
      tags: [''],
      
    })

  }

  // save() {
  //   console.log("begin");
  //   console.log(this.nblog);
  //   this.BlogService.add(this.nblog).subscribe(
  //     d => this.route.navigateByUrl('blog'),
  //     e => console.log(e)

  //   )
  // }
  onselect(event: any) {
    const filelist: FileList = event.target.files;
    this.selectedFile = filelist[0];

    // this.selectedFile = <File>event.target.files[0];
    // this.Blog.append('photo', this.selectedFile, this.selectedFile.name)
  }

  save() {
    this.Blog.append('title', this.nblog.title)
    this.Blog.append('body', this.nblog.body)
    // for (let i = 0; i < this.nblog.tag.length; i++) {

    //   this.Blog.append('tags', this.nblog.tag[i])
    //   console.log(this.nblog.tag[i])
    // }
    this.Blog.append('photo', this.selectedFile);
    this.BlogService.add(this.Blog).subscribe(
      a => {
        console.log(this.selectedFile)
        console.log(a)
        console.log(a.photo)
        console.log(this.Blog)
      }
    )
  }






  ngOnInit(): void {
    this.UserService.getUser().subscribe(
      a => {
        this.user = a

      }
    )
  }

}
