import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { SharedModule } from 'app/shared/shared.module';
import { ExpenseCategoryService } from './services/expense-category.service';
import { ExpenseService } from './services/expense.service';
import { ExpenseSubCategoryService } from './services/expense-sub-category.service';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { NgxDatePipe } from 'app/shared/pipes/ngx-date.pipe';



@NgModule({
  declarations: [
    ExpensesComponent,
    CreateExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    SharedModule
  ],
  providers: [
    ExpenseCategoryService,
    ExpenseSubCategoryService,
    ExpenseService,
    NgxDatePipe
  ]
})
export class ExpensesModule { }
