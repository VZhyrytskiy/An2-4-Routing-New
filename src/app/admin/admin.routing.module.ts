import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageUsersComponent } from '.';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'users', component: ManageTasksComponent },
          { path: 'tasks', component: ManageUsersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageUsersComponent];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminRoutingModule { }
