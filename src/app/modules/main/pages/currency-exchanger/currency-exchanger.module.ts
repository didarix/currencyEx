import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import {
  CurrencyExchangerHomeComponent,
  CurrencyExchangerDetailsComponent,
} from './index';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

const BASEMODULES = [CommonModule,FormsModule];

const MODULES = [CurrencyExchangerRoutingModule,SharedModule];
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
