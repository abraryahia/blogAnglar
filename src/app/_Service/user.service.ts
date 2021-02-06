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
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

  constructor(private http: HttpClient ) { }
  login(username: string, password: string){
    return this.http.post<{ token: string }>('http://localhost:3000/user/login', { username: username, password: password })
  }
<<<<<<< Updated upstream
  getUser(){
    return this.http.get<User>('http://localhost:3000/user/me',{ headers: { authorization: this.token } })
  }

=======
  EditData( eUser:User){
  return this.http.patch<User>('http://localhost:3000/user/edit/',eUser ,{headers:{authorization:this.token}});
  }
  RemoveAc( ){
    return this.http.delete<{msg:string}>('http://localhost:3000/user/remove' ,{headers:{authorization:this.token}});
    }
  getme( ){
    return this.http.get<User>('http://localhost:3000/user/me' , {headers:{authorization:this.token}} );
  }
>>>>>>> Stashed changes
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
