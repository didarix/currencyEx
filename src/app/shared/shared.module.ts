import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  CurrencyConverterComponent,
  ConverterPanelComponent,
  MostPopularComponent,
} from './index';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
    MostPopularComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],

  providers: [SharedService],
  exports: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
    MostPopularComponent,
  ],
})
export class SharedModule {}
