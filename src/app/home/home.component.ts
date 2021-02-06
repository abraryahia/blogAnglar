import { Component, OnInit } from '@angular/core';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private u:UserService) { }
  logout(){
    this.u.logout();
  }

  ngOnInit(): void {
  }

}
