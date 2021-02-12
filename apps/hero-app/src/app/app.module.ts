import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeroUiModule } from '@flowing/hero/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HeroUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
