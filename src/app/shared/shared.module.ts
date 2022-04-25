import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NgxDatePipe } from './pipes/ngx-date.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    NgxDatePipe,
    CurrencyFormatPipe,
    RoundNumberPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgApexchartsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    NgxDatePipe,
    CurrencyFormatPipe,
    RoundNumberPipe
  ]
})
export class SharedModule { }
