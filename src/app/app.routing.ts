import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { PageNotFoundComponent } from './components/page-not-found';
import { LoginComponent } from './components/login';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    // The router will match this route if the URL requested 
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
