import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionsComponent } from "./components/transitions/transitions.component";
import { TransformsComponent } from "./components/transforms/transforms.component";
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AnimationsComponent } from "./components/animations/animations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransitionsComponent, TransformsComponent, ButtonsComponent, AnimationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advanced-css';
}
