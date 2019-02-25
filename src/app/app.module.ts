import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SaleRecordComponent } from './sale-record/sale-record.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyReportComponent,
    SaleRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
