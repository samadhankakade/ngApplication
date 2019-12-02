import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./layout/index/index.module').then( d => d.IndexModule)
  },
  {
    path:'products',
    loadChildren: ()=> import('./layout/products/products.module').then( d => d.ProductsModule)
  },
  {
    path:'blog',
    loadChildren: ()=> import('./layout/blog/blog.module').then( d => d.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
