import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, CurrencyConverterComponent } from './index';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, CurrencyConverterComponent],
  imports: [CommonModule, ReactiveFormsModule],

  providers: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
