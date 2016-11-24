import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }          from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageTasksComponent }    from './manage-tasks/manage-tasks.component';
import { ManageUsersComponent }    from './manage-users/manage-users.component';

import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageTasksComponent,
    ManageUsersComponent
  ]
})
export class AdminModule {}