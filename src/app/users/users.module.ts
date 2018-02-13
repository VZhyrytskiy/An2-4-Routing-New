import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent, UserArrayService } from '.';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [UserComponent],
  providers: [UserArrayService]
})
export class UsersModule {}
