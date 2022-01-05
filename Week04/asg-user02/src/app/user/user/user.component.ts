import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: IUser = {id:0,user_name:''}
  constructor() { }

  ngOnInit(): void {
  }

}
