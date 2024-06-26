import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;

  selectedUser?: User

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === id);
  }
}
