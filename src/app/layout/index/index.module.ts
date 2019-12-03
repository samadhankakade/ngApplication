import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsModule } from '../products/products.module';
import { BlogModule } from '../blog/blog.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ProductsModule,
    BlogModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ContactUsComponent]
})
export class IndexModule { }
