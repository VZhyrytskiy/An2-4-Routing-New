import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from './../models/user';
import { UserArrayService } from './../users/services/user-array.service';

@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private userArrayService: UserArrayService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<User> | null {
    console.log('UserResolve Guard is called');
    const id = +route.paramMap.get('id');

    return this.userArrayService.getUser(id).then(user => {
      if (user) {
        return Promise.resolve(user);
      }

      // id not found
      this.router.navigate(['/users']);
      return null;
    });
  }
}
