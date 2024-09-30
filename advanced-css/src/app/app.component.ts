import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionsComponent } from "./components/transitions/transitions.component";
import { TransformsComponent } from "./components/transforms/transforms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransitionsComponent, TransformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advanced-css';
}
