import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list';
import { UserFormComponent } from './user-form';

const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'add',
        component: UserFormComponent
      },
      {
        path: 'edit/:id',
        component: UserFormComponent,
      }
    ]
  }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
