import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import {
  AboutComponent,
  MessagesComponent,
  LoginComponent,
  PathNotFoundComponent
} from './layout';
import { AuthGuard, CustomPreloadingStrategyService } from './core';

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
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule',
    data: { preload: true }
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

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService
  // enableTracing: true  // Makes the router log all its internal events to the console.
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  // re-export RouterModule in order to have access
  // to its directives in main module.
  exports: [RouterModule]
})
export class AppRoutingModule {}
