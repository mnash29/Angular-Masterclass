import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../../models/task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  readonly cancelAddTask = output<void>();
  readonly submitNewTask = output<TaskData>();

  titleFormInput = '';
  summaryFormInput = '';
  dueDateFormInput = '';


  onClickCancel() {
    this.cancelAddTask.emit();
  }

  onClickSubmit() {
    this.submitNewTask.emit({
      title: this.titleFormInput,
      summary: this.summaryFormInput,
      date: this.dueDateFormInput,
    })
  }
}
