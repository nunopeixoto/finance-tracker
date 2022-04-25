export interface MonthlyBalance {
  expenses: number,
  earnings: number
}
export interface Last12MonthsMonthlyBalanceWidgetModel {
  [month: string]: MonthlyBalance
}
