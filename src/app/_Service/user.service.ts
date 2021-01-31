import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient ) { }
  rgister(newUser : User){
   return this.http.post<User>('http://localhost:3000/user/register' , newUser)   ;
  }

  login(logUser:User){
   return this.http.post<User>('http://localhost:3000/user/login' , logUser )
  }

}
