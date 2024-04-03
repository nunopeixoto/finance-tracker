import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEvolutionPerCategoryComponent } from './expense-evolution-per-category.component';

describe('ExpenseEvolutionPerCategoryComponent', () => {
  let component: ExpenseEvolutionPerCategoryComponent;
  let fixture: ComponentFixture<ExpenseEvolutionPerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseEvolutionPerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEvolutionPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
