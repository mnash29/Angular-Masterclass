import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent implements OnInit {
  // EventEmitter triggers an event to a parent component listening for the event
  // use the `emit()` function to trigger the event.
  // @Output() allows the property to flow out of the component when a change is detected
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();

  // Alternatively, the server name can be retrieved by HTMLFormElement reference
  // newServerName = '';
  newServerContent = '';

  // Alternatively, but not recommended, access the server content through the ViewChild element reference
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLFormElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLFormElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.newServerContent,
    });
  }
}
