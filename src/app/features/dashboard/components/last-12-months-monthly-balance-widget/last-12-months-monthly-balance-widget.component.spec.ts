import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYearMonthlyBalanceWidgetComponent } from './last-12-months-monthly-balance.component';

describe('CurrentYearMonthlyBalanceWidgetComponent', () => {
  let component: CurrentYearMonthlyBalanceWidgetComponent;
  let fixture: ComponentFixture<CurrentYearMonthlyBalanceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentYearMonthlyBalanceWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYearMonthlyBalanceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
