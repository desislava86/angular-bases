import { NgModule } from '@angular/core';
import { CouterComponent } from './components/counter/couter.component';


@NgModule({
  declarations:[
    CouterComponent
  ],
  exports: [
    CouterComponent
  ]
})
export class CouterModule {


}
