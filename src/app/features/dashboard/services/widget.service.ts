import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Top5ExpenseCategoriesAllTimeWidget } from '../models/top5-expense-categories-all-time-widget.model';
import { Last12MonthsMonthlyBalanceWidget } from '../models/last-12-months-monthly-balance-widget.model';
import { ExpenseEvolutionPerCategoryWidget } from '../models/expense-evolution-per-category-widget.model';

@Injectable()
export class WidgetService {
  constructor(
    private http: HttpClient,
  ) { }

  getWidgetLast12MonthsMonthlyBalance(): Observable<Last12MonthsMonthlyBalanceWidget> {
    return this.http.get<Last12MonthsMonthlyBalanceWidget>(environment.apiUrl + '/api/widgets/last-12-months-monthly-balance');
  }

  getWidgetTop5ExpenseCategoriesAllTime(): Observable<Top5ExpenseCategoriesAllTimeWidget> {
    return this.http.get<Top5ExpenseCategoriesAllTimeWidget>(environment.apiUrl + '/api/widgets/top5-expense-categories-all-time');
  }

  getWidgetExpenseEvolutionPerCatrgory(category: string): Observable<ExpenseEvolutionPerCategoryWidget> {
    const options = {
      params: new HttpParams().set('expenseCategoryId', 15)
    };

    return this.http.get<ExpenseEvolutionPerCategoryWidget>(environment.apiUrl + '/api/widgets/expense-evolution-per-category', options);
  }

}
