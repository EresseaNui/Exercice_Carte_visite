import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [AppComponent, BusinessCardComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
