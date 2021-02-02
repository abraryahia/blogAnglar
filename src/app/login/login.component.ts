import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Service/user.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string="";
  public password: string="";
  public error: string="";
  // logUser : User = new User('','','','');
  constructor( private UserService : UserService , private router : Router) { }
  urlImg:string="assets/image/signin-image.jpg";
  // login(){
  //   this.UserService.login(this.logUser).subscribe(
  //     d=> {
  //     console.log(d)
  //     this.router.navigateByUrl('/home')
  //   }
  //   )
  // }
  public login() {
    this.UserService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/blog']),
        err => this.error = 'Could not authenticate'
      );
  }

  ngOnInit(): void {
  
  }

}
