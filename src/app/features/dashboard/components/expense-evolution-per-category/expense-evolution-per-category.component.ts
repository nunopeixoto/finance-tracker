import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

import {WidgetService} from '../../services/widget.service';
import {RoundNumberPipe} from 'app/shared/pipes/round-number.pipe';
import {ExpenseEvolutionPerCategoryWidget} from '../../models/expense-evolution-per-category-widget.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-expense-evolution-per-category',
  templateUrl: './expense-evolution-per-category.component.html',
  styleUrls: ['./expense-evolution-per-category.component.scss']
})
export class ExpenseEvolutionPerCategoryComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public loading: boolean = true;
  constructor(
    private widgetService: WidgetService,
    private roundNumberPipe: RoundNumberPipe
  ) {
  }

  ngOnInit(): void {
    this.widgetService.getWidgetExpenseEvolutionPerCatrgory('padel').subscribe((data) => {
      this.buildChart(data);
      this.loading = false;
    });
  }

  private buildChart(data: ExpenseEvolutionPerCategoryWidget) : void {
    let totals: number[] = [];
    let dates: string[] = [];
    for (let category in data) {
      dates.push(category);
      totals.push(this.roundNumberPipe.transform(data[category]));
    }
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: totals
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        type: 'datetime',
        categories: dates,
      }
    };
  }
}
