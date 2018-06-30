import { ApiModule } from './communication/swagger/api.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
