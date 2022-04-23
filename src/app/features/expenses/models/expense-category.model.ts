export class ExpenseCategory {
  id: number;
  description: string;

  constructor(category: any) {
    this.id = Number(category.id);
    this.description = category.description;
  }
}
