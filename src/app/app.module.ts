import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

// Step 01. In case if we don't have access to index.html file
// or <head> tag we add base tag programatially
import { APP_BASE_HREF } from '@angular/common';

// Step 04. Import routing
import { routing } from './app.routing';

import { TodoAppComponent } from './app.component';
// Step 04. Import components
import { AboutComponent } from './components/about';
import { PageNotFoundComponent } from './components/page-not-found';
import { LoginComponent } from './components/login/login.component';

import { DialogService } from './services/dialog.service';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    TodoAppComponent,
    // Step 04
    AboutComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TasksModule,
    UsersModule,
    // Step 04
    routing
  ],
  providers: [
    DialogService,
    AuthService,
    AuthGuard
    // Step 01
    // { provide: APP_BASE_HREF, useValue: '/' }
  ],
  entryComponents: [TodoAppComponent],
  bootstrap: [TodoAppComponent]
})
export class AppModule {

}
