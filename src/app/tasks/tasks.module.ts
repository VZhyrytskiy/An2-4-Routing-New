import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent, TaskListComponent } from './components';

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  imports: [CommonModule, FormsModule, TasksRoutingModule],
  providers: []
})
export class TasksModule {}
