import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';
import { CounterComponent } from './counter/counter.component';
import { PeriodPipe } from './period.pipe';
import { SettingsComponent } from './settings/settings.component';
import { CounterSettingsComponent } from './counter-settings/counter-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PanelComponent,
    CounterComponent,
    PeriodPipe
    ,
    SettingsComponent,
    CounterSettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
