import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { User } from './../models/user.model';
import { UserArrayService } from './../services/user-array.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User;
  originalUser: User;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    // we should recreate component because this code runs only once
    const id = +this.route.snapshot.paramMap.get('userID');
    this.userArrayService.getUser(id)
      .subscribe(
        user => {
          this.user = {...user};
          this.originalUser = {...user};
        },
        err => console.log(err)
      );
  }

  saveUser() {
    const user = {...this.user};

    if (user.id) {
      this.userArrayService.updateUser(user);
    } else {
      this.userArrayService.addUser(user);
    }
    this.originalUser = {...this.user};
  }

  goBack() {
  }
}
