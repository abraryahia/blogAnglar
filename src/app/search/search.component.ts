import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchbb:Blog []=[];
  constructor( public blogserve : BlogService, public router: Router) { 
    this.searchbb = JSON.parse(localStorage.getItem('searchblog') || '{}');
   
  }
  sea()
  {
     this.router.navigateByUrl('/home');   
  }
  ngOnInit(): void {
  }

}
