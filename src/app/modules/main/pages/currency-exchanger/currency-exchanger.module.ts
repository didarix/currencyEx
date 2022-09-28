import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import {
  CurrencyExchangerHomeComponent,
  CurrencyExchangerDetailsComponent,
} from './index';

const BASEMODULES = [CommonModule];

const MODULES = [CurrencyExchangerRoutingModule];
const COMPONENTS = [
  CurrencyExchangerHomeComponent,
  CurrencyExchangerDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASEMODULES, ...MODULES],
  exports: [...COMPONENTS],
})
export class CurrencyExchangerModule {}
