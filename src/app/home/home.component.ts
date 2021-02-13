import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    search!:string ;
    blog :Blog[] = [];
  constructor(private u:UserService , private s: BlogService , private router: Router) { }
  logout(){
    this.u.logout();
  }
  done(){
   console.log(this.search)
   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigateByUrl('/searches/'+this.search)
   });
  }

  ngOnInit(): void {

  }

}
