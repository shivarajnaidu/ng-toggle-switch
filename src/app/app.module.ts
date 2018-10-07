import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgToggleSwitchModule } from 'ng-toggle-switch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgToggleSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
