import { Component, OnInit } from '@angular/core';
import { ECurrencyExchange } from 'src/app/modules/main/enums/currency-exchange.enum';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';
import { ToFrom } from '../../interfaces/toFrom.interface';

@Component({
  selector: 'app-currency-exchanger-home',
  templateUrl: './currency-exchanger-home.component.html',
  styleUrls: ['./currency-exchanger-home.component.scss'],
})
export class CurrencyExchangerHomeComponent implements OnInit {
  // currency exchange enum
  currencyExchange = ECurrencyExchange;
  // most popular currency
  mostPopularNames = EMostPopularNames;
  // from  currency name
  from: string = EMostPopularNames.EUR;
  // to  currency name
  to: string = EMostPopularNames.USD;
  // amount
  amount: number = 1;
  //  enum paths
  eMainPaths = EMainPaths;
  constructor() {}

  ngOnInit(): void {}

  /**
   * `getSelectedSymbols()`
   * @description get selected value and set it
   * @param  event event of input
   */
  getSelectedSymbols(event: ToFrom) {
    this.to = event.to;
    this.from = event.from;
  }
}
