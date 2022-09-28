import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-currency-exchanger-details',
  templateUrl: './currency-exchanger-details.component.html',
  styleUrls: ['./currency-exchanger-details.component.scss'],
})
export class CurrencyExchangerDetailsComponent implements OnInit {
  test: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getQueryParams();
  }
  
  /**
   * `getQueryParams()`
   * @description get data from queryParams
   */
  getQueryParams = () => {
    /**get all params */
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  };
}
