import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from '.';

const tasksRoutes: Routes = [
  {
    path: 'home',
    component: TaskListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksRoutingModule { }
