import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './../models/user.model';
import { UserArrayService } from './../services/user-array.service';

@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private userArrayService: UserArrayService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User| null> {
    console.log('UserResolve Guard is called');

    if (!route.paramMap.has('userID') ) {
      return of(new User(null, '', ''));
    }

    const id = +route.paramMap.get('userID');

    return this.userArrayService.getUser(id)
      .pipe(
        map(user => {
          if (user) {
            return user;
          } else {
            this.router.navigate(['/users']);
            return of(null);
          }
        }),
        catchError(() => {
          this.router.navigate(['/users']);
          return of(null);
        })
      );
  }
}
