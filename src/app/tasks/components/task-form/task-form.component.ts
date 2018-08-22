import { Component, OnInit } from '@angular/core';

import { TaskModel } from './../../models/task.model';
import { TaskArrayService } from './../../services/task-array.service';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: TaskModel;

  constructor(private taskArrayService: TaskArrayService) {}

  ngOnInit(): void {
    this.task = new TaskModel();
  }

  onSaveTask() {
    const task = { ...this.task };

    if (task.id) {
      this.taskArrayService.updateTask(task);
    } else {
      this.taskArrayService.createTask(task);
    }
  }

  onGoBack(): void {}
}
