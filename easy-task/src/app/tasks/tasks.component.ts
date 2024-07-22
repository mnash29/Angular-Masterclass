import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskData } from '../models/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name?: string;
  readonly name = input.required<string>();
  readonly userId = input.required<string>();

  isAddingNewTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  }

  onToggleAddTaskDialog() {
    this.isAddingNewTask = !this.isAddingNewTask;
  }

  onTaskCreate(taskData: TaskData) {
    this.taskService.addTask(taskData, this.userId());
    this.onToggleAddTaskDialog();
  }
}
