import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  CurrencyConverterComponent,
  ConverterPanelComponent,
  MostPopularComponent,
  HistoricalChartComponent,
} from './index';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
    MostPopularComponent,
    HistoricalChartComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgApexchartsModule],

  providers: [SharedService],
  exports: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
    MostPopularComponent,
    HistoricalChartComponent,
  ],
})
export class SharedModule {}
