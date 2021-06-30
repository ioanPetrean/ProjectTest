import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsControlsComponent } from './app-settings-controls.component';

describe('AppSettingsControlsComponent', () => {
  let component: AppSettingsControlsComponent;
  let fixture: ComponentFixture<AppSettingsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSettingsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSettingsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
