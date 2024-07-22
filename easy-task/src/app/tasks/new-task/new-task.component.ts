import { Component, output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  readonly cancelAddTask = output<void>();
  readonly submitNewTask = output<Task>();

  onClickCancel() {
    this.cancelAddTask.emit();
  }

  onClickSubmit() {}
}
