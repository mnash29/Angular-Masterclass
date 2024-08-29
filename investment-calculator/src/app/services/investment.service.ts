import { Injectable, signal } from '@angular/core';
import {
  AnnualData,
  InvestmentInput,
} from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {

  annualInvestmentData = signal<AnnualData[]>([]);

  calculateInvestmentResults(payload: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      payload;

    let resultData = []
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      resultData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualInvestmentData.set(resultData)
  }
}
