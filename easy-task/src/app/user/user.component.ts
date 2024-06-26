import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];

  // Using signals, Angular is notified what a change occurs to update
  // all components of the app using this `signal` (change detection)
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Using computed, the value only changes when the underlying signal is invoked
  selectedUserAvatarPath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  /**
   * getter for selected user avatar path
   */
  // get selectedUserAvatarPath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  /**
   * Event listener for user button clicked
   */
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
