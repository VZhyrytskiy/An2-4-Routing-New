import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from './../../models/user';
import { UserArrayService } from './../services/user-array.service';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    // it is not necessary to save subscription to route.params
    // it handles automatically
    this.route.params
      .switchMap((params: Params) => this.userArrayService.getUser(+params['id']))
      .subscribe(
        user => {
          this.user = Object.assign({}, user);
          this.oldUser = user;
        },
        err => console.log(err)
    );
  }

  ngOnDestroy(): void {
  }

  saveUser() {
    const user = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName
    );

    if (user.id) {
      this.userArrayService.updateUser(user);
      // if success
      this.oldUser = this.user;
    }
    else {
      this.userArrayService.addUser(user);
      // if success
      this.oldUser = this.user;
    }
  }

  goBack() {
  }
}
