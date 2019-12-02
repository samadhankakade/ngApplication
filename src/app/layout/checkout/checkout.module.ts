import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [CartComponent, CheckoutComponent, PaymentComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  exports: [CartComponent, CheckoutComponent, PaymentComponent]
})
export class CheckoutModule { }
