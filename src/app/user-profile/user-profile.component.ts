import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Models/blog';
import { User } from '../_Models/user';
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  blogs: Blog[] = [];
  user : User=new User("","","","") ;
  profile:string='assets/image/Profile.jpg'
  nfid !:number;
  nfoid!:number;
  
  constructor(public BlogService: BlogService, public UserService: UserService) { }

  ngOnInit(): void {
    this.BlogService.getProfile().subscribe(
      d => this.blogs = d
    )
    this.UserService.getUser().subscribe(
      a =>{ this.user = a
        this.nfid=this.user.following!.length
        this.nfoid=this.user.followers!.length}
    )
    
  }

}

// save() {
//   console.log("begin");
//   console.log(this.nblog);
//   this.BlogService.add(this.nblog).subscribe(
//     d => this.route.navigateByUrl('blog'),
//     e => console.log(e)

//   )
// }
