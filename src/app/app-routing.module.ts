import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AboutComponent,
  MessagesComponent,
  LoginComponent,
  PathNotFoundComponent
} from './layout';
import { AuthGuard } from './core';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'messages',
    component: MessagesComponent,
    outlet: 'messages'
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // re-export RouterModule in order to have access
  // to its directives in main module.
  exports: [RouterModule]
})
export class AppRoutingModule {}
