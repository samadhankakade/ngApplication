import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  exports: [SignInComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class SignupModule { }
