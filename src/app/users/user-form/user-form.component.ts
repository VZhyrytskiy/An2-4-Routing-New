import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from './../../models/user';
import { UserArrayService } from './../services/user-array.service';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  originalUser: User;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    // we should recreate component because this code runs only once
    const id = +this.route.snapshot.paramMap.get('id');
    this.userArrayService.getUser(id)
      .then(user => {
        this.user = Object.assign({}, user);
        this.originalUser = Object.assign({}, user);
      })
      .catch(err => console.log(err));
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
      this.originalUser = Object.assign({}, this.user);
    }
    else {
      this.userArrayService.addUser(user);
      // if success
      this.originalUser = Object.assign({}, this.user);
    }

    this.goBack();
  }

  goBack() {
     this.router.navigate(['./../../'], { relativeTo: this.route});
  }
}
