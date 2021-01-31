import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   nUser : User = new User('','','','');
  constructor( private UserService : UserService , private router : Router) { }
 
  Submit(){
    this.UserService.rgister(this.nUser).subscribe(
      d=> {
      console.log(d)
      this.router.navigateByUrl('/home')
    }
    )
  }
  ngOnInit(): void {
  }

}
