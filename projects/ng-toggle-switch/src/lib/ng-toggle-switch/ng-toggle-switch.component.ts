import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ng-toggle-switch',
  templateUrl: './ng-toggle-switch.component.html',
  styleUrls: ['./ng-toggle-switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgToggleSwitchComponent),
      multi: true
    }
  ]
})
export class NgToggleSwitchComponent implements OnInit, ControlValueAccessor {
  @Input()
  set checked(value) {
    this.isChecked = value;
  }

  isChecked = false;

  onChange: any = (e) => { };
  onTouched: any = () => { };

  constructor() { }
  ngOnInit() {
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.isChecked = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  switch(event) {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
  }

}
