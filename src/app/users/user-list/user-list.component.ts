import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from './../../models/user';
import { UserArrayService } from './../user-array-service/user-array.service';

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Array<User>;
  private selectedUserId: number;
  private sub: Subscription;

  constructor(
    private usersService: UserArrayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
          .then(users => this.users = users);

    // listen id from UserFormComponent
    this.sub = this.route.params
      .subscribe(params => {
        let id = +params['id'];
        if (id) {
          this.selectedUserId = +params['id'];
          console.log(`Last time you edit user with id ${this.selectedUserId}`);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
