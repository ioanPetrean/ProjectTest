import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecondComponent } from './app-second.component';

describe('AppSecondComponent', () => {
  let component: AppSecondComponent;
  let fixture: ComponentFixture<AppSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
