import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ECurrencyConverter } from '../../enums/currency-cenverter.enum';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  // currency converter enum
  EcurrencyConverter = ECurrencyConverter;
  // currencys Names
  currencys: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  /***** form *****/
  converterForm = this.fb.group({
    from: ['Florida'],
    to: ['South Dakota'],
  });

  /**
   * `changeCurrency()`
   * @description get selected value
   * @param  event event of selected
   */
  changeCurrency = (event: any) => {
    console.log(event.value);
    // this.converterForm.controls['to'].disable();
  };

  /**
   * `swap()`
   * @description to swap value between from and to
   */
  swap = () => {
    const toValue = this.converterForm.controls['to'].value;
    const fromValue = this.converterForm.controls['from'].value;

    this.converterForm.controls['to'].setValue(fromValue);
    this.converterForm.controls['from'].setValue(toValue);
  };

  /**
   * `submit()`
   * @description button to convert currency value
   */
  submit = () => {
    if (!this.converterForm.valid) {
      console.log('ss');
    } else {
      console.log(JSON.stringify(this.converterForm.value));
    }
  };
}
