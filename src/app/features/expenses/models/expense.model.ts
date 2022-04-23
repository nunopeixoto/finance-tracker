import { ExpenseCategory } from "./expense-category.model";
import { ExpenseSubCategory } from "./expense-sub-category.model";

export class Expense {
  id: number;
  description: string;
  date: Date;
  amount: number;
  expenseCategory: ExpenseCategory;
  expenseSubCategory?: ExpenseSubCategory;
  note?: string;

  constructor(category: any) {
    this.id = Number(category.id);
    this.description = category.description;
    this.date = category.date;
    this.amount = Number(category.amount);
    this.expenseCategory = category.expense_category;
    this.expenseSubCategory = category.expense_sub_category;
    this.note = category.note;
  }
}
