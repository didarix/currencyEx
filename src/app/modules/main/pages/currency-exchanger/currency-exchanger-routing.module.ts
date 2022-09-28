import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMainPaths } from '../../enums/paths.enum';
import {
  CurrencyExchangerHomeComponent,
  CurrencyExchangerDetailsComponent,
} from './index';
const routes: Routes = [
  {
    path: '',
    component: CurrencyExchangerHomeComponent,
    pathMatch: 'full',
  },
  {
    path: EMainPaths.DETAILS,
    component: CurrencyExchangerDetailsComponent,
    data:{}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyExchangerRoutingModule {}
