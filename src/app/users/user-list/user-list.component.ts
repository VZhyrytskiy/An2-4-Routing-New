import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from './../../models/user';
import { UserArrayService } from './../services/user-array.service';

@Component({
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Array<User>;

  constructor(
    private usersService: UserArrayService,
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .then(users => this.users = users)
      .catch((err) => console.log(err));
  }

  ngOnDestroy() {
  }
}
