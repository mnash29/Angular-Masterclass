import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../services/investment.service';
import { AnnualData } from '../models/Investment';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestmentFormInput: number = 0;
  annualInvestmentFormInput: number = 0;
  expectedReturnFormInput: number = 0;
  durationFormInput: number = 0;
  annualData: AnnualData[] = [];

  constructor(private investmentService: InvestmentService) {}

  onSubmitCalculate() {
    const payload = {
      initialInvestment: this.initialInvestmentFormInput,
      annualInvestment: this.annualInvestmentFormInput,
      expectedReturn: this.expectedReturnFormInput,
      duration: this.durationFormInput,
    };
    this.annualData =
      this.investmentService.calculateInvestmentResults(payload);

    console.log(this.annualData);
  }

}
