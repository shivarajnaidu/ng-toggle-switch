import { NgModule } from '@angular/core';
import { NgToggleSwitchComponent } from './ng-toggle-switch/ng-toggle-switch.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgToggleSwitchComponent],
  exports: [NgToggleSwitchComponent]
})
export class NgToggleSwitchModule { }
