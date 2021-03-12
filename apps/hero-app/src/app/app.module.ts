import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeroHeroListModule } from '@flowing/hero/hero-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HeroHeroListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
