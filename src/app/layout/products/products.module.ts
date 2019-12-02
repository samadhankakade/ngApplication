import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { CheckoutModule } from '../checkout/checkout.module';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductSliderComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CheckoutModule
  ],
  exports: [ProductListComponent, ProductDetailsComponent, ProductSliderComponent]
})
export class ProductsModule { }
