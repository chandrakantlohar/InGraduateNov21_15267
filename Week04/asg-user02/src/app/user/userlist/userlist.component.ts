import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from '../user/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 users : IUser[] = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers()
  {
    this.userService.getUser()
    .subscribe(allUsers => this.users = allUsers);
  }

}
