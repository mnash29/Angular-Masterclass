import { Component, input } from '@angular/core';
import { AnnualData } from '../models/investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  calculatedResultsInput = input<AnnualData[]>();

  // Used in @for tracking method
  trackResult(index: number, data: AnnualData) {    
    return index + data.year;
  }
}
