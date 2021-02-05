import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../_Models/blog';
import { UserService } from './user.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public token: any = localStorage.getItem('access_token');
  
  add(nblog: Blog) {
    return this.http.post<Blog>("http://localhost:3000/blog/add", nblog, { headers: { authorization: this.token } });

  }
  getAll() {
    return this.http.get<Blog[]>("http://localhost:3000/blog/home")

  }
  getProfile() {
    return this.http.get<Blog[]>("http://localhost:3000/blog/profile",{ headers: { authorization: this.token } })

  }

  constructor(private http: HttpClient, private u: UserService) { }
}




