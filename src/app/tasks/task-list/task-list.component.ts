import { Component, OnInit } from '@angular/core';

import { Task } from './../../models/task';
import { TaskArrayService } from './../task-array-service/task-array.service';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor(
    private tasksService: TaskArrayService) { }

  ngOnInit() {
    console.log(this.tasks);
    this.tasksService.getTasks()
      .then(tasks => this.tasks = tasks);
  }

  completeTask(task: Task): void {
    task.done = true;
  }
}
