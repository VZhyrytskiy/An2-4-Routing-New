import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()  task: Task;
  @Output() complete = new EventEmitter<Task>();

  constructor() { }

  completeTask(): void {
    this.complete.emit(this.task);
  }

  editTask() {

  }
}
