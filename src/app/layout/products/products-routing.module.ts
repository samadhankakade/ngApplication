import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from '../checkout/checkout/checkout.component';


const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path:'product-detail/:id'
  },
  {
    path:'checkout',
    component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
