import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CouterModule } from './couter/counter.module';
import { HeroModule } from './heroes/hero.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CouterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
