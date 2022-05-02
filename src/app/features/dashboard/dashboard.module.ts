import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { WidgetService } from './services/widget.service';
import { RoundNumberPipe } from 'src/app/shared/pipes/round-number.pipe';
import { Top5ExpenseCategoriesAllTimeComponent } from './components/top5-expense-categories-all-time/top5-expense-categories-all-time.component';
import { Last12MonthsMonthlyBalanceWidgetComponent } from './components/last-12-months-monthly-balance-widget/last-12-months-monthly-balance-widget.component';

@NgModule({
  declarations: [
    HomeDashboardComponent,
    Last12MonthsMonthlyBalanceWidgetComponent,
    Top5ExpenseCategoriesAllTimeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgApexchartsModule,
  ],
  providers: [
    WidgetService,
    RoundNumberPipe
  ]
})
export class DashboardModule { }
