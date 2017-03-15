import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent, UserComponent, UserFormComponent, UserArrayService } from '.';

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
