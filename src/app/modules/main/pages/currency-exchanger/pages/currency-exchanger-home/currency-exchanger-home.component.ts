import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-exchanger-home',
  templateUrl: './currency-exchanger-home.component.html',
  styleUrls: ['./currency-exchanger-home.component.scss'],
})
export class CurrencyExchangerHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * `getAmount()`
   * @description get value of input
   * @param  event event of input
   */
  getAmount(event: any) {
    console.log(event.target.value);
  }
}
