import { Component, OnInit } from '@angular/core';
import { ExpensesService } from './expenses.service';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
    expenses: Expense[] = [];
    
    constructor(private expensesService: ExpensesService) { }

    ngOnInit(): void {
        this.getExpenses();
    }

    getExpenses() {
        this.expensesService.index()
            .subscribe((expenses: Expense[]) => {
                console.log(expenses);
                this.expenses = expenses;
            });
    }
}
