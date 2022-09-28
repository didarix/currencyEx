import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './index';



const DIRECTIVES = [];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
  ],

  providers: [],
  exports: [HeaderComponent],
})
export class SharedModule { }
