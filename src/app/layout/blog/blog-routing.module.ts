import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'blog-list', pathMatch: 'full'
  },
  {
    path: 'blog-list', component: BlogListComponent
  },
  {
    path: 'blog-details', component: BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
