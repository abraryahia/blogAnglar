import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/blog';
=======
>>>>>>> Stashed changes
import { BlogService } from '../_Service/blog.service';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< Updated upstream
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
=======


  constructor(private u:UserService , private BlogService :BlogService) { }
  logout(){
    this.u.logout();
  }
  
  seablog!:string ;
  search()
  {
      this.BlogService.serachby(this.seablog).subscribe(
     a=>{
       console.log(a);
       localStorage.setItem('searchblog',JSON.stringify(a));
      
     })
   }

  ngOnInit(): void { 
>>>>>>> Stashed changes

  }
}
