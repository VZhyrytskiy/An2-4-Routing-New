import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

import { UserArrayService } from './user-array-service/user-array.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserFormComponent,
    UserComponent,
  ],
  providers: [
    UserArrayService,
  ]
})
export class UsersModule {}
