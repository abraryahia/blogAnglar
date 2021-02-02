import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map}from'rxjs/operators';
import { User } from '../_Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient ) { }
  login(username: string, password: string):Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:3000/user/login', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  rgister(newUser : User){
   return this.http.post<User>('http://localhost:3000/user/register' , newUser)   ;
  }

  // login(logUser:User){
  //  return this.http.post<User>('http://localhost:3000/user/login' , logUser )
  // }

}
