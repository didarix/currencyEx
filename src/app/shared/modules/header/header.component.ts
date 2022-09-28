import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EMainPaths } from 'src/app/modules/main/enums/paths.enum';
import { EHeader } from '../../enums/header.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  Eheader = EHeader;
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
}
