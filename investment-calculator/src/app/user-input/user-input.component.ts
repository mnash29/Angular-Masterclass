import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestmentSignal = signal(0);
  annualInvestmentSignal = signal(0);
  expectedReturnSignal = signal(5);
  durationSignal = signal(10);

  constructor(private investmentService: InvestmentService) {}

  onSubmitCalculate() {
    const calcInvestmentResultsPayload = {
      initialInvestment: this.initialInvestmentSignal(),
      annualInvestment: this.annualInvestmentSignal(),
      expectedReturn: this.expectedReturnSignal(),
      duration: this.durationSignal(),
    };
    this.investmentService.calculateInvestmentResults(calcInvestmentResultsPayload);
  }
}
