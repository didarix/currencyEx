import { Component, OnInit } from '@angular/core';
import { ECurrencyExchange } from 'src/app/modules/main/enums/currency-exchange.enum';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';

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
  from = EMostPopularNames.EUR;
  // amount
  amount: number = 1;
  //  enum paths
  eMainPaths = EMainPaths;
  constructor() {}

  ngOnInit(): void {}

  /**
   * `getAmount()`
   * @description get value of input
   * @param  event event of input
   */
  getAmount = (event: any) => {
    console.log(event.target.value);
  };
}
