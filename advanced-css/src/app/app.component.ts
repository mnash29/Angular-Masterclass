import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionsComponent } from "./components/transitions/transitions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransitionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advanced-css';
}
