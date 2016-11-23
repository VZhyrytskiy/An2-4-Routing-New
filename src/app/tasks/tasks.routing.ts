import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list';

const tasksRoutes: Routes = [
  {
    path: 'home',
    component: TaskListComponent
  }
];

export const tasksRouting: ModuleWithProviders = RouterModule.forChild(tasksRoutes);
