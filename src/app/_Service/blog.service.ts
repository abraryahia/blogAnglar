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
  
  getProfile() {
    return this.http.get<Blog[]>("http://localhost:3000/blog/profile",{ headers: { authorization: this.token } })
  }
  add(nblog:Blog){
   return this.http.post<Blog>("http://localhost:3000/blog/add",nblog,{headers:{authorization:this.token}});

  }
  getme(){
    return this.http.get<Blog[]>("http://localhost:3000/blog/profile", {headers : {authorization:this.token}});
   }
    getAll(){
   return this.http.get<Blog []>("http://localhost:3000/blog/home")

  }
  editOne(id:string , eblog : Blog){
    return this.http.patch<Blog>("http://localhost:3000/blog/"+ id , eblog , {headers : {authorization:this.token}});

  }
  getOne(id:string){
    return this.http.get<Blog>("http://localhost:3000/blog/one/"+id,{headers:{authorization:this.token}});
  }

  getBlogRelatedTOAut(id:string){
    return this.http.get<Blog[]>("http://localhost:3000/blog/auther/"+id,{headers:{authorization:this.token}})
  }

  getsearch(id:string){
    return this.http.get<Blog[]>("http://localhost:3000/blog/searchProfile"+id, {headers : {authorization:this.token}});
   }
  constructor(private http: HttpClient, private u: UserService) { }
  }

 





