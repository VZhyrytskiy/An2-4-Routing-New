import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

import { UserModel } from './../models/user.model';
import { UserArrayService } from './../services/user-array.service';
import { UsersServicesModule } from '../users-services.module';

@Injectable({
  providedIn: UsersServicesModule
})
export class UserResolveGuard implements Resolve<UserModel> {
  constructor(
    private userArrayService: UserArrayService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserModel | null> {
    console.log('UserResolve Guard is called');

    if (!route.paramMap.has('userID')) {
      return of(new UserModel(null, '', ''));
    }

    const id = +route.paramMap.get('userID');

    return this.userArrayService.getUser(id).pipe(
      map((user: UserModel) => {
        if (user) {
          return user;
        } else {
          this.router.navigate(['/users']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/users']);
        // catchError MUST return observable
        return of(null);
      })
    );
  }
}
