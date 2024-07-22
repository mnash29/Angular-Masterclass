import { Component, input, computed, output } from '@angular/core';
import { User } from '../models/user';
import { CardComponent } from '../shared/card/card.component';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /**
   * @Output({required: true}) didSelectedUser = new EventEmitter();
   *
   * Using signals, Angular is notified what a change occurs to update
   * all components of the app using this `signal` (change detection)
   * selectedUser = signal(DUMMY_USERS[randomIndex]);
   *
   * Using `computed`, the value only changes when the underlying signal is invoked
   * alternative to using `getter` method
   *
   * @Input({required: true}) avatar!: string;
   * @Input({required: true}) name!: string;
   */

  /**
   * Alternative to `Input` decorator and exposed as a `Signal`
   */
  readonly user = input.required<User>();
  readonly selected = input.required<boolean>();
  
  /**
   * Alternative to `Output` decorator but pretty much identical functionality
   */
  readonly didSelectedUser = output<string>();
  
  /**
   * Called only when the underlying `avatar` value has changed
   */
  selectedUserAvatarPath = computed(() => 'assets/users/' + this.user().avatar);

  /**
   * getter for selected user avatar path but is triggered whenever the component
   * is changed and not just the avatar property. See `computed`
   */
  // get selectedUserAvatarPath() {
  //   return 'assets/users/' + this.avatar;
  // }

  /**
   * Event listener for user button clicked
   */
  onSelectUser() {
    this.didSelectedUser.emit(this.user().id);
  }
}
