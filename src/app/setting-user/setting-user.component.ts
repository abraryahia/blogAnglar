import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Service/user.service';

@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.component.html',
  styleUrls: ['./setting-user.component.css']
})
export class SettingUserComponent implements OnInit {
  Euser !: User;
  constructor(private UserService:UserService , private ar : ActivatedRoute) { }
  save(){
    console.log(this.Euser)
  
    this.UserService.EditData(this.Euser).subscribe(
      d=> console.log(d)
    )
    
  }
  delete(){
    console.log(this.Euser)
  
    this.UserService.RemoveAc().subscribe(
      d=> console.log(d)
    )
    
  }
  ngOnInit(): void {
    this.UserService.getme( ).subscribe(
      d => {console.log(d) 
           this.Euser = d }
    )

  }

}
