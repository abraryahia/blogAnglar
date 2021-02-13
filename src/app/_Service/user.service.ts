import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token: any = localStorage.getItem('access_token');


  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:3000/user/login', { username: username, password: password })
  }
  getUser() {
    return this.http.get<User>('http://localhost:3000/user/me', { headers: { authorization: this.token } })
  }

  EditData(eUser: User) {
    return this.http.patch<User>('http://localhost:3000/user/edit/', eUser, { headers: { authorization: this.token } });
  }
  RemoveAc() {
    return this.http.delete<{ msg: string }>('http://localhost:3000/user/remove', { headers: { authorization: this.token } });
  }
  getme() {
    return this.http.get<User>('http://localhost:3000/user/me', { headers: { authorization: this.token } });
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_id');

  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  rgister(newUser: User) {
    return this.http.post<User>('http://localhost:3000/user/register', newUser);
  }

  follow(id: string) {
    console.log(this.token);
    return this.http.post('http://localhost:3000/user/follow/' + id, {}, { headers: { authorization: this.token } })
  }
  unfollow(id: string) {
    return this.http.post('http://localhost:3000/user/unfollow/' + id, {}, { headers: { authorization: this.token } })
  }
  searchById(id: string) {
    return this.http.get<User>('http://localhost:3000/user/search/' + id, { headers: { authorization: this.token } })
  }
  searchByName(username: string) {
    return this.http.get<User>('http://localhost:3000/user/name/' + username, { headers: { authorization: this.token } })

  }
}
