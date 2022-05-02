export interface MonthlyBalance {
  expenses: number,
  earnings: number
}
export interface Last12MonthsMonthlyBalanceWidget {
  [month: string]: MonthlyBalance
}
