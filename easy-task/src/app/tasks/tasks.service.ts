import { Injectable } from '@angular/core';
import { Task, TaskData } from '../models/task';
import { DUMMY_TASKS } from '../data/dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
     const localTasks = localStorage.getItem('tasks');

     if (localTasks) {
       this.tasks = JSON.parse(localTasks);
     }
  }

  private generateTaskId(max: number) {
    return `t${Math.floor(Math.random() * max)}`;
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: TaskData, userId: string) {
    this.tasks.unshift({
      id: this.generateTaskId(6),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
