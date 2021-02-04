import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token!: string;

  constructor(private http: HttpClient) { }
  login(username: string, password: string){
    return this.http.post<{ token: string }>('http://localhost:3000/user/login', { username: username, password: password })
     
      
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  rgister(newUser: User) {
    return this.http.post<User>('http://localhost:3000/user/register', newUser);
  }

  // login(logUser:User){
  //  return this.http.post<User>('http://localhost:3000/user/login' , logUser )
  // }

}
