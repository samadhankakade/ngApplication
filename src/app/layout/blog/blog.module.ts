import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [BlogListComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [BlogListComponent, BlogDetailsComponent]
})
export class BlogModule { }
