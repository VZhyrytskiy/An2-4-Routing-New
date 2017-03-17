import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersRoutingModule, usersRouterComponents } from './users.routing.module';

import { UserComponent, UserArrayService } from '.';
import { CanDeactivateGuard }    from './../guards/can-deactivate.guard';
import { UserResolveGuard }    from './../guards/user-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: [
    usersRouterComponents,
    UserComponent,
  ],
  providers: [
    UserArrayService,
    CanDeactivateGuard,
    UserResolveGuard
  ]
})
export class UsersModule {}
