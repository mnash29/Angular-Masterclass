import { Component, input, computed, output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Alertnative to `Output` decorator
  readonly didSelectedUser = output<string>();
  // @Output({required: true}) didSelectedUser = new EventEmitter();

  // Using signals, Angular is notified what a change occurs to update
  // all components of the app using this `signal` (change detection)
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Using `computed`, the value only changes when the underlying signal is invoked
  // alternative to using `getter` method
  selectedUserAvatarPath = computed(() => 'assets/users/' + this.avatar());

  // Alternative to `Input` decorator and exposed as a `Signal`
  readonly avatar = input.required<string>();
  readonly name = input.required<string>();
  readonly id = input.required<string>();
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

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
    this.didSelectedUser.emit(this.id());
  }
}
