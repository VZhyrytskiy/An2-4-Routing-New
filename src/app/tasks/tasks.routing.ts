import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list';
import { TaskFormComponent } from './task-form';

const tasksRoutes: Routes = [
  {
    path: 'home',
    component: TaskListComponent
  },
  {
    path: 'edit/:id',
    component: TaskFormComponent
  }
];

export const tasksRouting: ModuleWithProviders = RouterModule.forChild(tasksRoutes);
