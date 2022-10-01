import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { Observable } from 'rxjs';
import { APIURL } from 'src/assets/config/http/api';

@Injectable()
export class SharedService {
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('username:password'));
  }

  constructor(private http: HttpClient) {}

  /**
   * getConvertValue()
   * @description conver currency
   * @param from
   * @param to
   * @param amount
   * @returns new value after converted
   */
  getConvertValue(from: string, to: string, amount: number): Observable<any> {
    const url = APIURL.convert;
    return this.http
      .get(`${url}?to=${to}&from=${from}&amount=${amount}`)
      .pipe(take(1));
  }

  /**
   * getSymbols()
   * @description to get all currency symbols
   * @returns symbols
   */
  getSymbols = (): Observable<any> => {
    const url = APIURL.symbols;
    return this.http.get(`${url}`).pipe(take(1));
  };
}
