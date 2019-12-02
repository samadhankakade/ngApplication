import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutModule } from '../checkout/checkout.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ContactUsComponent]
})
export class IndexModule { }
