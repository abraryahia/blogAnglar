import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../_Models/blog';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  add(nblog:Blog){
   return this.http.post<Blog>("http://localhost:3000/blog/add",nblog,{headers:{authorization:this.u.token}});

  }
    getAll(){
   return this.http.get<Blog []>("http://localhost:3000/blog/home")

  }

  constructor(private http:HttpClient,private u:UserService) { }
}




