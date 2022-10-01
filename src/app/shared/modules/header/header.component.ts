import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EMostPopularNames } from 'src/app/modules/main/enums/most-popular-names.enum';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';
import { EHeader } from '../../enums/header.enum';
import { ESymbolsFullName } from '../../enums/symbols-full-name-enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // header enum
  eheader = EHeader;
  // header enum
  eMostPopularNames = EMostPopularNames;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * `navigateToDetails()`
   * @description navigate to details page
   * @param  data value of from and to and input value
   */
  navigateToDetails = (data: any) => {
    const url = EMainPaths.DETAILS;
    this.router.navigate([url], { queryParams: { data: data } });
  };

  /**
   * geDetails()
   * @description navigate to details page
   * @param  from from currency value
   * @param  to to currency value
   */
  geDetails = (from: string, to: string) => {
    const url = EMainPaths.DETAILS;
    let fullName;
    if (from == this.eMostPopularNames.EUR) {
      fullName = ESymbolsFullName.EUR;
    } else {
      fullName = ESymbolsFullName.USD;
    }
    this.router.navigate([url], {
      queryParams: {
        amount: 1,
        to: to,
        from: from,
        fullName: fullName,
      },
    });
  };
}
