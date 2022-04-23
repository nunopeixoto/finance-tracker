export interface CreateExpenseRequest {
  id: number;
  description: string;
  date: Date;
  amount: number;
  expenseCategoryId: number;
  expenseSubCategoryId?: number;
  note?: string;
}
