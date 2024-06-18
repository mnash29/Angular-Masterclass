import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  serverName = 'PlaceHolder';
  username = '';
  serverCreated = false;
  displayDetails = false;
  buttonClicks = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username === '';
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    // this.buttonClicks.push(this.buttonClicks.length + 1)
    this.buttonClicks.push(new Date());
  }

}
