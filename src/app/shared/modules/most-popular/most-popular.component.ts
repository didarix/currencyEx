import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/core/interfaces/api-response.interface';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent implements OnInit {
  // currency to name
  @Input() to: string = EMostPopularNames.USD;
  // currency from name
  @Input() from: string = EMostPopularNames.EUR;
  // currency amount
  @Input() amount: number = 1;
  // currency result
  result!: number;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.getCurrencyValue(this.from, this.to, this.amount);
  }

  ngOnChanges() {
    this.getCurrencyValue(this.from, this.to, this.amount);
  }

  /**
   * `getCurrencyValue()`
   * @description get currency rate
   * @param  from currency from
   * @param  to currency to
   * @param  value currency value
   */
  getCurrencyValue = (from: string, to: string, amount: number) => {
    this.sharedService.getConvertValue(from, to, amount).subscribe({
      next: (response: ApiResponse) => {
        this.result = response.result;
      }
    });
  };
}
