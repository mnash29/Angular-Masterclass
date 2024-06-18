import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;

  private subscriptions = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.userService.activatedUser.subscribe((didActivate) => {
        this.userActivated = didActivate;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
