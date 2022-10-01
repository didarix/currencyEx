import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiResponse } from 'src/app/core/interfaces/api-response.interface';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';
import { ToFrom } from 'src/app/modules/main/pages/currency-exchanger/interfaces/toFrom.interface';
import { ECurrencyConverter } from '../../enums/currency-cenverter.enum';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  // currency amount
  @Input() amount!: number;
  // current page
  @Input() page: string = EMainPaths.HOME;
  //symbol to and from selected Output
  @Output() selectedSymbols = new EventEmitter<ToFrom>();
  //symbol to value
  to = EMostPopularNames.USD;
  //symbol from value
  from = EMostPopularNames.EUR;
  // currency converter enum
  EcurrencyConverter = ECurrencyConverter;
  //  enum paths
  eMainPaths = EMainPaths;
  // currencys Names
  currencysNames: object = {};

  // currency result
  result!: number;

  constructor(public fb: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getSymbols();
  }

  /**
   * `getSymbols()`
   * @description return all symbols names
   */
  getSymbols = () => {
    this.sharedService.getSymbols().subscribe({
      next: (response: ApiResponse) => {
        this.currencysNames = response.symbols;
      },
    });
  };

  /***** form *****/
  converterForm = this.fb.group({
    from: [this.from],
    to: [this.to],
  });

  /**
   * `swap()`
   * @description to swap value between from and to
   */
  swap = () => {
    const to = this.converterForm.controls['to'].value;
    const from = this.converterForm.controls['from'].value;

    this.converterForm.controls['to'].setValue(from);
    this.converterForm.controls['from'].setValue(to);
  };

  /**
   * `submit()`
   * @description button to convert currency value
   */
  submit = () => {
    this.to = this.converterForm.controls['to'].value;
    this.from = this.converterForm.controls['from'].value;

    if (this.amount > 0) {
      this.sharedService
        .getConvertValue(this.from, this.to, this.amount)
        .subscribe({
          next: (response: ApiResponse) => {
            this.result = response.result;
          },
        });
      this.selectedSymbols.emit({ to: this.to, from: this.from });
    } else {
      alert(this.EcurrencyConverter.VALIDATION);
    }
  };
}
