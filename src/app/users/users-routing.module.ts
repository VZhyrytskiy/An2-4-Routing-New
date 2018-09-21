import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent, UserFormComponent } from './components';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: UserFormComponent
      },
      {
        path: 'edit/:userID',
        component: UserFormComponent
      },
      {
        path: '',
        component: UserListComponent
      }
    ]
  }
];

export let usersRouterComponents = [
  UsersComponent,
  UserListComponent,
  UserFormComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
