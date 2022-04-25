import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Last12MonthsMonthlyBalanceWidgetModel } from '../models/last-12-months-monthly-balance-widget.model';

@Injectable()
export class WidgetService {
  constructor(
    private http: HttpClient,
  ) { }

  getWidget(name: string): Observable<Last12MonthsMonthlyBalanceWidgetModel> {
    return this.http.get<Last12MonthsMonthlyBalanceWidgetModel>(environment.apiUrl + `/api/widgets/${name}`);
  }
}
