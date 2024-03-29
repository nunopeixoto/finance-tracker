import { Component, OnInit } from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormControl, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import { LoginResponseDto } from '../../dto/response/login-response.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  hideConfirmation = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signUpForm = this.formBuilder.group({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    name: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
    password_confirmation: new UntypedFormControl('', [Validators.required, this.passwordMatch]),
  });

  onSubmit(): void {
    this.authService.register(this.signUpForm.value);
  }

  getErrorMessage(field: string) : string {
    if (this.signUpForm.get(field)?.hasError('required')) {
      return "This field can't be empty";
    }

    if (this.signUpForm.get(field)?.hasError('passwordMatch')) {
      return "The password does not match.";
    }

    return this.signUpForm.get(field)?.hasError('email') ? 'Not a valid email' : '';
  }

  private passwordMatch(control: AbstractControl) : ValidationErrors | null {
    if (control.root.get('password')?.value !== control.value) {
      return {
        passwordMatch: {value: control.value}
      }
    }

    return null;
  }
}
