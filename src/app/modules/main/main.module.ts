import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const MODULES = [MainRoutingModule, SharedModule];

/**
 * COMPONENTS
 */
const COMPONENTS = [MainComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [],
  providers: [],
})
export class MainModule {}
