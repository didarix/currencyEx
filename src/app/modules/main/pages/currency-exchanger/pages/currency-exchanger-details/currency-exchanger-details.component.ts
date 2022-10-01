import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ECurrencyExchangeDetails } from 'src/app/modules/main/enums/currency-exchange-details-enum';
import { ECurrencyExchange } from 'src/app/modules/main/enums/currency-exchange.enum';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';
import { ToFrom } from '../../interfaces/toFrom.interface';
@Component({
  selector: 'app-currency-exchanger-details',
  templateUrl: './currency-exchanger-details.component.html',
  styleUrls: ['./currency-exchanger-details.component.scss'],
})
export class CurrencyExchangerDetailsComponent implements OnInit {
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
  //  full name of currency
  fullName!: string;
  //  enum Currency Exchange Details
  eCurrencyExchangeDetails = ECurrencyExchangeDetails;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getQueryParams();
  }

  /**
   * `getSelectedSymbols()`
   * @description get selected value and set it
   * @param  event event of input
   */
  getSelectedSymbols(event: ToFrom) {
    this.to = event.to;
    this.from = event.from;
  }

  /**
   * `getQueryParams()`
   * @description get data from queryParams
   */
  getQueryParams = () => {
    /**get all params */
    this.route.queryParams.subscribe((params: any) => {
      this.amount = params.amount;
      this.from = params.from;
      this.to = params.to;
      this.fullName = params.fullName;
    });
  };
  /**
   * `geHome()`
   * @description navigate to home page
   */
  geHome = () => {
    this.router.navigate(['/']);
  };
}
