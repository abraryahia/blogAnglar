import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logUser : User = new User('','','','');
  constructor( private UserService : UserService , private router : Router) { }
 
  login(){
    this.UserService.login(this.logUser).subscribe(
      d=> {
      console.log(d)
      this.router.navigateByUrl('/home')
    }
    )
  }

  ngOnInit(): void {
  
  }

}
