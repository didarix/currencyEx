import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApiResponse } from 'src/app/core/interfaces/api-response.interface';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { SharedService } from '../../services/shared.service';
import { ChartOptions } from '../../types/chart-options.type';
import { format, lastDayOfMonth } from 'date-fns';
@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.scss'],
})
export class HistoricalChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  // currency to name
  @Input() to: string = EMostPopularNames.USD;
  // currency from name
  @Input() from: string = EMostPopularNames.EUR;
  //today
  today = new Date();
  //last day in every mounth last year
  PastYearDates: any = [];
  // rates
  rates: EMostPopularNames[] = [];
  //chart options
  public chartOptions!: Partial<ChartOptions>;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.getLastDay();
    if (this.PastYearDates.length == 12) {
      this.getRates();
      if (this.rates.length == 12) {
        this.buildChart();
      }
    }
  }

  ngOnChanges(): void {
    this.getLastDay();
    if (this.PastYearDates.length == 12) {
      this.getRates();
      if (this.rates.length == 12) {
        this.buildChart();
      }
    }
  }
  /***
   * `getLastDay()`
   * @description get last day in every mounth past
   *  year and push in new array PastYearDates a
   */
  getLastDay() {
    for (let i = 0; i < 12; i++) {
      const newDay = new Date();
      // past Month
      const pastMonth = new Date(newDay.setMonth(this.today.getMonth() - i));
      //last day of past month
      const lastDay = format(lastDayOfMonth(pastMonth), 'yyyy-MM-dd');
      this.PastYearDates.push(lastDay);
    }
  }
  /**
   * `getRates()`
   * @description get all rates
   */
  getRates() {
    this.PastYearDates.forEach((date: any) => {
      this.sharedService.getRates(this.from, this.to, date).subscribe({
        next: (response: ApiResponse) => {
          this.rates.push(response.rates[this.to]);
        },
      });
    });
  }
  /**
   * `buildChart()`
   * @description build chart ui
   */
  buildChart() {
    this.chartOptions = {
      series: [
        {
          name: 'rate',
          data: this.rates,
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
