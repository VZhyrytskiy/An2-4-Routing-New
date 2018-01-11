import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent, UserListComponent, UserFormComponent } from '.';

import { CanDeactivateGuard } from './../shared';

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
        component: UserFormComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: UserListComponent
      },
    ]
  }
];

export let usersRouterComponents = [UsersComponent, UserListComponent, UserFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
