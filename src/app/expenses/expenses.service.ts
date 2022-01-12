import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable()
export class ExpensesService {

    constructor(private http: HttpClient) { }
    
    index() : Observable<Expense[]> {
        return this.http.get<Expense[]>('http://finance-tracker.api.com:8000/api/expenses');
    }
}
