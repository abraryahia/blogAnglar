import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../_Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  add(nblog:Blog){
   return this.http.post<Blog>("http://localhost:3000/blog/add",nblog);

  }
    getAll(){
   return this.http.get<Blog []>("http://localhost:3000/blog/all")

  }

  constructor(private http:HttpClient) { }
}




