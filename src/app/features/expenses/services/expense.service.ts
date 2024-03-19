import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Expense } from '../models/expense.model';
import { CreateExpenseRequest } from '../dtos/create-expense-request.dto';

@Injectable()
export class ExpenseService {
  constructor(
    private http: HttpClient,
  ) { }

  createExpense(payload: CreateExpenseRequest): Observable<Expense> {
    return this.http.post<Expense>(environment.apiUrl + '/api/expenses', payload);
  }
}
