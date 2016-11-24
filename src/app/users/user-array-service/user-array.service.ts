import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { User } from './../../models/user';

let userList = [
  new User(1, 'Anna', 'Borisova'),
  new User(2, 'Boris', 'Vlasov'),
  new User(3, 'Gennadiy', 'Dmitriev')
];

let userListPromise = Promise.resolve(userList);

@Injectable()
export class UserArrayService {
  getUsers() {
    return userListPromise;
  }

  getUser(id: number) {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  addUser(user: User) {
    userList.push(user);
  }

  updateUser(user: User) {
    let i = -1;

    userList.forEach((item, index) => {
      if (item.id === user.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      userList.splice(i, 1, user);
    }
  }
}
