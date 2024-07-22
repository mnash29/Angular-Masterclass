import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  readonly task = input.required<Task>();

  // Alternative to using the constructor to inject a service
  private taskService = inject(TasksService);

  onClickComplete() {
    this.taskService.removeTask(this.task().id);
  }
}
