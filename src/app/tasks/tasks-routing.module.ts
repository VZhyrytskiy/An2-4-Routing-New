import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent, TaskFormComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: TaskListComponent
  },
  {
    path: 'edit/:taskID',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
