import { Injectable } from '@angular/core';
import {
  AnnualData,
  CalculationPayload,
} from '../models/Investment';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private annualData: AnnualData[] = [];

  constructor() {}

  calculateInvestmentResults(payload: CalculationPayload) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      payload;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return this.annualData;
  }
}
