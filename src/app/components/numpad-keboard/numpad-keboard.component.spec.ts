import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpadKeboardComponent } from './numpad-keboard.component';

describe('NumpadKeboardComponent', () => {
  let component: NumpadKeboardComponent;
  let fixture: ComponentFixture<NumpadKeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumpadKeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpadKeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
