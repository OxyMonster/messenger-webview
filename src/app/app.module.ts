import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillersModule } from './billers/billers.module';
import { BillersService } from './services/billers.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BillersModule
  ],
  providers: [
    BillersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
