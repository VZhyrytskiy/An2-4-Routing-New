import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { User } from './../../models/user';
import { UserArrayService } from './../user-array-service/user-array.service';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;
  private sub: Subscription;

  constructor(
    private usersService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    this.sub = this.route.params.subscribe(params => {
      let id = +params["id"];

      // NaN - for new user, id - for edit
      if (id) {
        this.usersService.getUser(id)
          .then(user => {
            this.user = Object.assign({}, user);
            this.oldUser = user;
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveUser() {
    let user = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName
    );

    if (user.id) {
      this.usersService.updateUser(user);
      // if success
      this.oldUser = this.user;
    }
    else {
      this.usersService.addUser(user);
      // if success
      this.oldUser = this.user;
    }

    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  goBack() {
     this.router.navigate(['./../../'], { relativeTo: this.route});
  }
}
