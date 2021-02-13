import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../_Models/blog';
import { BlogService } from '../_Service/blog.service';

@Component({
  selector: 'app-search-title-tag',
  templateUrl: './search-title-tag.component.html',
  styleUrls: ['./search-title-tag.component.css']
})
export class SearchTitleTagComponent implements OnInit {
  search : Blog[]=[]
  constructor(private s:BlogService , private ar : ActivatedRoute) { }

  ngOnInit(): void {
   // location.reload()
    let str :string =""
    this.ar.params.subscribe(
    a=> {str = a['str']
         console.log(str)
    }
    )
    this.s.getsearch(str).subscribe(
      a=>{
        this.search = a 
        console.log("a",a)
        console.log(str)
      }
    )

  }

}
