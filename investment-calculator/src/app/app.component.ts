import { Component } from '@angular/core';
import { AnnualData } from './models/investment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  calculatedResults: AnnualData[] = []

  onCalculateResults(payload: AnnualData[]) {
    this.calculatedResults = payload
  }
}
