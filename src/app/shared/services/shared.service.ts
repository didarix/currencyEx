import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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
    const url = APIURL.fixer;
    return this.http
      .get(`${url}convert?to=${to}&from=${from}&amount=${amount}`)
      .pipe(take(1));
  }

  // /**
  //  * getMostPopular()
  //  * @description get all value for enter currency ex('USD','EUR',ets..)
  //  * @param symbols
  //  * @param base
  //  * @returns all rate
  //  */
  // getMostPopular(symbols: string, base: string) {
  //   const url = APIURL.fixer;
  //   return this.http
  //     .get(`${url}latest?symbols=${symbols}&base=${base}`)
  //     .pipe(take(1));
  // }
}
