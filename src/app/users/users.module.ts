import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserListComponent, UserComponent, UserFormComponent, UserArrayService } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    UserListComponent,
    UserComponent,
    UserFormComponent
  ],
  providers: [
    UserArrayService,
  ]
})
export class UsersModule {}
