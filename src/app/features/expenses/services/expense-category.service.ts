import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpenseCategory } from '../models/expense-category.model';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    private http: HttpClient,
  ) { }

  getExpenseCategories(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(environment.apiUrl + '/api/expense-categories');
  }
}
