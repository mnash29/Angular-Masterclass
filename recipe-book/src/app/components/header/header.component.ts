import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() navBarItemClickEmitter = new EventEmitter<string>();

  constructor() {}
  
  ngOnInit(): void {}

  onNavBarClicked(navBarItem: string) {
    this.navBarItemClickEmitter.emit(navBarItem)
  }
}
