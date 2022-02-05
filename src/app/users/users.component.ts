import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;
  error:any;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  this._userService.getUsers().subscribe(users => {
    this.users = users;
  },
  err=>{this.error=err;}
  )
  }
}
