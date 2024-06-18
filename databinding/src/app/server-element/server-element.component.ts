import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None // Apply css styles globally.
})
export class ServerElementComponent implements OnInit {
  // Use @Input('alias') decorator to make property bindable outside the parent component
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}

  
}
