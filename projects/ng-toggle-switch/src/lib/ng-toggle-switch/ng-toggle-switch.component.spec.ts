import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToggleSwitchComponent } from './ng-toggle-switch.component';

describe('NgToggleSwitchComponent', () => {
  let component: NgToggleSwitchComponent;
  let fixture: ComponentFixture<NgToggleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToggleSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
