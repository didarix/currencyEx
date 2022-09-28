import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMainPaths } from './enums/paths.enum';
import { MainComponent } from './main.component';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//     import('./pages/home/home.module').then((m) => m.CurrencyExchangerModule),
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/currency-exchanger/currency-exchanger.module').then(
            (m) => m.CurrencyExchangerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
