import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from './../../models/task';
import { TaskArrayService } from './../services/task-array.service';

@Component({
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  task: Task;

  constructor(
    private tasksService: TaskArrayService,
  ) { }

  ngOnInit(): void {
    this.task = new Task(null, '', null, null);
  }

  ngOnDestroy(): void {
  }

  saveTask() {
    const task = new Task(
      this.task.id,
      this.task.action,
      this.task.priority,
      this.task.estHours
    );


    if (task.id) {
      this.tasksService.updateTask(task);
    }
    else {
      this.tasksService.addTask(task);
    }
  }

  goBack(): void {
  }
}
