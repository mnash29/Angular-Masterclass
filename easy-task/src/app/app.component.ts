import { Component } from '@angular/core';
import { DUMMY_USERS } from './data/dummy-users';

import { User } from './models/user';

@Component({
  selector: 'app-root',
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
