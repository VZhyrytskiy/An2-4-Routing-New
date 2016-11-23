import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Task } from './../../models/task';

let taskList = [
  new Task(1, "Estimate", 1, 8, 8, true),
  new Task(2, "Create", 2, 8, 4, false),
  new Task(3, "Deploy", 3, 8, 0, false)
];

let taskListPromise = Promise.resolve(taskList);

@Injectable()
export class TaskArrayService {

  getTasks() {
    return taskListPromise;
  }

  getTask(id: number) {
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id));
  }

  addTask(task: Task) {
    taskList.push(task);
  }

  updateTask(task: Task) {
    let i = -1;

    taskList.forEach((item, index) => {
      if (item.id === task.id ) {
        i = index;
        return false;
      }
    });
    
    if (i > -1) {
      taskList.splice(i,1,task);
    }
  }
}
