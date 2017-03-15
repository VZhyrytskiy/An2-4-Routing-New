import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserListComponent, UserComponent, UserFormComponent, UserArrayService } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
