import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { ExpensesService } from './expenses/expenses.service';
import { CustomHttpInterceptor } from './custom-http-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    NavbarComponent,
    ExpensesComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
        { path: '', component: HomepageComponent},
        { path: 'login', component: LoginComponent},
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
        { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuardService]},
        { path: 'portfolios', component: PortfoliosComponent, canActivate: [AuthGuardService]}
    ])
  ],
  exports: [RouterModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomHttpInterceptor,
        multi: true
    },
    AuthService,
    AuthGuardService,
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
