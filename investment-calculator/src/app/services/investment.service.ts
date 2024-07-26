import { Injectable } from '@angular/core';
import {
  AnnualData,
  CalculationData,
} from '../models/Investment';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {

  constructor() {}

  calculateInvestmentResults(payload: CalculationData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      payload;

    let annualData: AnnualData[] = []
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
