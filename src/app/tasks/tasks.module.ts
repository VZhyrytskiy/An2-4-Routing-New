import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskListComponent, TaskComponent, TaskArrayService } from '.';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskArrayService
  ]
})
export class TasksModule {}
