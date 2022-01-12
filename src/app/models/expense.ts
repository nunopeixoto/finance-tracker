export interface Expense {
    id: number,
    user_id: number,
    description: string,
    date: Date,
    expense_category_id: number,
    expense_sub_category_id: number,
    note: string,
    amount: number
}
