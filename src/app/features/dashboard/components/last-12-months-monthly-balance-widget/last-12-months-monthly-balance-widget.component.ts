import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { WidgetService } from '../../services/widget.service';
import { RoundNumberPipe } from 'src/app/shared/pipes/round-number.pipe';
import { Last12MonthsMonthlyBalanceWidget } from '../../models/last-12-months-monthly-balance-widget.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-last-12-months-monthly-balance-widget',
  templateUrl: './last-12-months-monthly-balance-widget.component.html',
  styleUrls: ['./last-12-months-monthly-balance-widget.component.scss']
})
export class Last12MonthsMonthlyBalanceWidgetComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  public loading: boolean = true;
  constructor(
    private widgetService: WidgetService,
    private roundNumberPipe: RoundNumberPipe
  ) {
  }

  ngOnInit(): void {
    this.widgetService.getWidgetLast12MonthsMonthlyBalance().subscribe((data) => {
      this.buildChart(data);
      this.loading = false;
    });
  }

  private buildChart(data: Last12MonthsMonthlyBalanceWidget) : void {
    const months = Object.keys(data);

    let expenses = [];
    let earnings = [];
    let savings = [];
    for (let month in data) {
      let monthExpense = this.roundNumberPipe.transform(data[month].expenses);
      let monthEarnings = this.roundNumberPipe.transform(data[month].earnings);
      let monthSavings = this.roundNumberPipe.transform(data[month].earnings - data[month].expenses);
      expenses.push(monthExpense);
      earnings.push(monthEarnings);
      savings.push(monthSavings);
    }

    this.chartOptions = {
      series: [{
        name: "Expenses",
        data: expenses
      },
      {
        name: "Earnings",
        data: earnings
      },
      {
        name: "Savings",
        data: savings
      }],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: months
      },
      yaxis: {
        title: {
          text: "€ (euros)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "€ " + val;
          }
        }
      }
    };
  }

}
