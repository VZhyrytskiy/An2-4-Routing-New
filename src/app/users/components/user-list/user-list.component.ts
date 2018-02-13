import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';

import { User } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private userArrayService: UserArrayService,
  ) { }

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();
  }
}
