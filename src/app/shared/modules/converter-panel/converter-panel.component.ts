import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/core/interfaces/api-response.interface';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  // currency amount
  @Input() amount: number = 1;
  //symbol to value
  @Input() to: string = EMostPopularNames.USD;
  //symbol from value
  @Input() from: string = EMostPopularNames.EUR;
  // currency result
  result!: number;
  constructor(private sharedService: SharedService) {}

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
  getCurrencyValue(from: string, to: string, amount: number) {
    this.sharedService.getConvertValue(from, to, amount).subscribe({
      next: (response: ApiResponse) => {
        this.result = response.result;
      },
    });
  }
}
