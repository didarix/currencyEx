import { Component, OnInit } from '@angular/core';
import { EHeader } from '../../enums/header.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  Eheader = EHeader;
  constructor() {}

  ngOnInit(): void {}
}
