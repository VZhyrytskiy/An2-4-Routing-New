import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './../../models/user';
import { UserArrayService } from './../user-array-service/user-array.service';
import { DialogService }  from './../../services/dialog.service';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;

  constructor(
    private usersService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    this.route.data.forEach((data: { user: User }) => {
      this.user = Object.assign({}, data.user);
      this.oldUser = data.user;
    });
  }

  ngOnDestroy(): void {
  }

  saveUser() {
    console.log("save")
    let user = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName
    );

    if (user.id) {
      this.usersService.updateUser(user);
      this.oldUser = this.user;
      // optional parameter: http://localhost:4200/users;id=2
      this.router.navigate(['/users', {id: user.id}]);
    } 
    else {
      this.usersService.addUser(user);
      this.oldUser = this.user;
      this.router.navigate(['/users']);
    }
  }

  goBack() {
     this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.oldUser || this.oldUser.firstName === this.user.firstName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
