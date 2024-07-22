import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  readonly task = input.required<Task>();

  // @Output() complete = new EventEmitter<string>();
  readonly complete = output<string>();

  onClickComplete() {
    this.complete.emit(this.task().id);
  }
}
