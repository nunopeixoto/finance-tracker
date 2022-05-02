import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {WidgetService} from '../../services/widget.service';
import {RoundNumberPipe} from 'src/app/shared/pipes/round-number.pipe';
import {Top5ExpenseCategoriesAllTimeWidget} from '../../models/top5-expense-categories-all-time-widget.model';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-top5-expense-categories-all-time',
  templateUrl: './top5-expense-categories-all-time.component.html',
  styleUrls: ['./top5-expense-categories-all-time.component.scss']
})
export class Top5ExpenseCategoriesAllTimeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public loading: boolean = true;
  constructor(
    private widgetService: WidgetService,
    private roundNumberPipe: RoundNumberPipe
  ) {
  }

  ngOnInit(): void {
    this.widgetService.getWidgetTop5ExpenseCategoriesAllTime().subscribe((data) => {
      this.buildChart(data);
      this.loading = false;
    });
  }

  private buildChart(data: Top5ExpenseCategoriesAllTimeWidget) : void {
    let totals: number[] = [];
    for (let category in data) {
      totals.push(this.roundNumberPipe.transform(data[category]));
    }

    this.chartOptions = {
      series: totals,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: Object.keys(data),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
