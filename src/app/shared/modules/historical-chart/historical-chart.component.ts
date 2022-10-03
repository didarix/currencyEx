import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../types/chart-options.type';

@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.scss'],
})
export class HistoricalChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  //last day in every mounth last year
  PastYearDates = [
    '2021-01-31',
    '2021-02-28',
    '2021-03-31',
    '2021-04-30',
    '2021-05-31',
    '2021-06-30',
    '2021-07-31',
    '2021-08-31',
    '2021-09-30',
    '2021-10-31',
    '2021-11-30',
    '2021-12-31',
  ];

  rates = [100.2121, 41, 35, 51, 49, 62, 69, 91, 148];
  //chart options
  chartOptions!: Partial<ChartOptions>;
  constructor() {}

  ngOnInit(): void {
    this.getRates();
    this.buildChart();
  }
  getRates() {
    this.PastYearDates.forEach((date) => {
      console.log(date);
    });
  }
  /**
   * @description build chart ui
   */
  buildChart() {
    this.chartOptions = {
      series: [
        {
          name: 'rate',
          rates: this.rates,
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'monthly historical rates',
        align: 'left',
      },
      xaxis: {
        categories: this.PastYearDates,
      },
    };
  }
}
