import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { User } from '../_Models/user';
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-follow-profile',
  templateUrl: './follow-profile.component.html',
  styleUrls: ['./follow-profile.component.css']
})
export class FollowProfileComponent implements OnInit {
  blogs: Blog[] = [];
  user: User = new User("", "", "", "");
  profile: string = 'assets/image/signin-image.jpg'
  nfid !: number;
  nfoid!: number;
  id: string = "";
  isFollowing: boolean = false;
  loginId: any;

  constructor(public UserService: UserService, public BlogService: BlogService, public ar: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    let _id = "";
    let username = "";
    this.loginId = localStorage.getItem("access_id");
    // let userSearch:User=new User("","","","");
    this.ar.params.subscribe(
      c => {
        _id = c['id'],
          // username=c['username']
          console.log("id", _id)
      }
    )
    // userSearch.username=username;
    // console.log("Abraaaarrrrrrrreeeeee",userSearch);

    this.UserService.searchById(_id).subscribe(
      a => {
        console.log(_id);
        this.user = a
        console.log("user", this.user);
        this.nfid = this.user.following!.length;
        this.nfoid = this.user.followers!.length;
        this.isFollowing = this.user.followers?.includes(this.loginId) || false;
        console.log(this.isFollowing);
      }
    )
    // this.UserService.searchByName(username).subscribe(
    //   a => {
    //     console.log(username);
    //     this.user = a
    //     console.log("user", this.user);
    //     this.nfid=this.user.following!.length;
    //     this.nfoid=this.user.followers!.length;
    //   }
    // )
    this.BlogService.getBlogRelatedTOAut(_id).subscribe(
      d => this.blogs = d
    )
    this.id = _id;
    //follow trying

  }


  //Toglle follow button
  toggleFollow() {
    // if (this.isFollowing) this.UserService.unfollow(this.id);
    console.log("follllllllllllllllllloweeeeeeeee");
    this.UserService.follow(this.id).subscribe(
      console.log,
      console.log
    );
    console.log(this.id);
  }
  toggleUnFollow() {
    // if (this.isFollowing) this.UserService.unfollow(this.id);
    console.log("follllllllllllllllllloweeeeeeeee");
    this.UserService.unfollow(this.id).subscribe(
      console.log,
      console.log
    );
    console.log(this.id);
  }
  // follow(){
  //   let id="";
  //   console.log(this.id);
  //   this.ar.params.subscribe(
  //     a=>{id=a['id']
  //     this.UserService.follow(this.user._id!).subscribe(
  //       e=>{

  //         this.user._id!=e
  //         console.log(e)

  //       }
  //     )
  //   }

  //   )

  // }

}
