import { Component, OnInit } from '@angular/core';

// rxjs
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserModel>>;

  constructor(
    private userArrayService: UserArrayService,
  ) { }

  ngOnInit() {
    // this.users$ = this.userArrayService.users$
    //   .pipe(
    //     catchError(err => {
    //       console.log(err);
    //       return EMPTY;
    //     })
    //   );
    this.users$ = EMPTY;
  }
}
