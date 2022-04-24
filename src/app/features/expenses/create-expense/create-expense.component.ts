import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import { NgxDatePipe } from 'src/app/shared/pipes/ngx-date.pipe';
import {ExpenseCategory} from '../models/expense-category.model';
import {ExpenseSubCategory} from '../models/expense-sub-category.model';
import {Expense} from '../models/expense.model';
import {ExpenseCategoryService} from '../services/expense-category.service';
import {ExpenseSubCategoryService} from '../services/expense-sub-category.service';
import {ExpenseService} from '../services/expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {
  public expenseCategories: ExpenseCategory[] = [];
  public expenseSubCategories: ExpenseSubCategory[] = [];

  public filteredCategories: Observable<ExpenseCategory[]>|undefined = undefined;

  public filteredSubCategories: Observable<ExpenseSubCategory[]>|undefined = undefined;

  public createExpenseForm = this.formBuilder.group({
    description: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
    expenseCategory: new FormControl('', [Validators.required]),
    expenseSubCategory: new FormControl(''),
    note: new FormControl(''),
    amount: new FormControl('', [Validators.required]),
    type: new FormControl('debit', [Validators.required])
  });

  constructor(
    private formBuilder: FormBuilder,
    private expenseCategoryService: ExpenseCategoryService,
    private expenseSubCategoryService: ExpenseSubCategoryService,
    private expenseService: ExpenseService,
    private datePipe: NgxDatePipe
  ) { }

  ngOnInit(): void {
    this.expenseCategoryService.getExpenseCategories().subscribe((response: ExpenseCategory[]) => {
      this.expenseCategories = response.map((category) =>  new ExpenseCategory(category));
      this.filteredCategories = this.createExpenseForm.get('expenseCategory')?.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : '')),
        map(name => (name ? this.filterCategories(name) : this.expenseCategories.slice()))
      );
    });

    this.expenseSubCategoryService.getExpenseSubCategories().subscribe((response: ExpenseSubCategory[]) => {
      this.expenseSubCategories = response.map((subCategory) =>  new ExpenseSubCategory(subCategory));
      this.filteredSubCategories = this.createExpenseForm.get('expenseSubCategory')?.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : '')),
        map(name => (name ? this.filterSubCategories(name) : this.expenseSubCategories.slice())),
      );
    });
  }

  public displayDescription(category: ExpenseCategory|ExpenseSubCategory): string {
    return category && category.description ? category.description : '';
  }

  public createExpense() : void {
    const dto = {
      ...this.createExpenseForm.value,
      expenseCategoryId: this.createExpenseForm.value.expenseCategory.id,
      expenseSubCategoryId: this.createExpenseForm.value.expenseSubCategory.id,
      date: this.datePipe.transform(this.createExpenseForm.value.date, 'yyyy-MM-dd')
    };
    delete dto.expenseCategory;
    delete dto.expenseSubCategory;

    this.expenseService.createExpense(dto).subscribe((expense: Expense) => {
      // propagate

      // Clean up form
      this.createExpenseForm.reset();
      Object.keys(this.createExpenseForm.controls).forEach(key => {
        this.createExpenseForm.get(key)?.setErrors(null);
      });
    });
  }

  private filterCategories(value: string): ExpenseCategory[] {
    console.log('filter categories');
    const filterValue = value.toLowerCase();

    return this.expenseCategories.filter(category => category.description.toLowerCase().includes(filterValue));
  }

  private filterSubCategories(value: string): ExpenseCategory[] {
    const filterValue = value.toLowerCase();

    return this.expenseSubCategories.filter(category => category.description.toLowerCase().includes(filterValue));
  }

}
