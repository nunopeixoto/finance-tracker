import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpenseSubCategory } from '../models/expense-sub-category.model';

@Injectable()
export class ExpenseSubCategoryService {
  constructor(
    private http: HttpClient,
  ) { }

  getExpenseSubCategories(): Observable<ExpenseSubCategory[]> {
    return this.http.get<ExpenseSubCategory[]>(environment.apiUrl + '/api/expense-sub-categories');
  }
}
