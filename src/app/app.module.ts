import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';
import { CounterComponent } from './counter/counter.component';
import { PeriodPipe } from './period.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PanelComponent,
    CounterComponent,
    PeriodPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
