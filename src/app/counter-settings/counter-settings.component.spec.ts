import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSettingsComponent } from './counter-settings.component';

describe('CounterSettingsComponent', () => {
  let component: CounterSettingsComponent;
  let fixture: ComponentFixture<CounterSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterSettingsComponent]
    });
    fixture = TestBed.createComponent(CounterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
