import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5ExpenseCategoriesAllTimeComponent } from './top5-expense-categories-all-time.component';

describe('Top5ExpenseCategoriesAllTimeComponent', () => {
  let component: Top5ExpenseCategoriesAllTimeComponent;
  let fixture: ComponentFixture<Top5ExpenseCategoriesAllTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5ExpenseCategoriesAllTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5ExpenseCategoriesAllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
