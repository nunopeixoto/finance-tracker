import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { WidgetService } from './services/widget.service';
import { Last12MonthsMonthlyBalanceWidget } from './components/last-12-months-monthly-balance-widget/last-12-months-monthly-balance-widget.component';
import { RoundNumberPipe } from 'src/app/shared/pipes/round-number.pipe';

@NgModule({
  declarations: [
    HomeDashboardComponent,
    Last12MonthsMonthlyBalanceWidget
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
