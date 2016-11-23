import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { tasksRouting } from './tasks.routing';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

import { TaskArrayService } from './task-array-service/task-array.service';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    tasksRouting
  ],
  providers: [
    TaskArrayService
  ]
})
export class TasksModule {}
