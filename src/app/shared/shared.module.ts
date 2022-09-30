import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  CurrencyConverterComponent,
  ConverterPanelComponent,
} from './index';
import { ReactiveFormsModule } from '@angular/forms';
import {} from './modules/converter-panel/converter-panel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],

  providers: [],
  exports: [
    HeaderComponent,
    CurrencyConverterComponent,
    ConverterPanelComponent,
  ],
})
export class SharedModule {}
