import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { Error404Component } from './error/404.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', loadChildren: './components/products/product.module#ProductModule'},

  {path: '', redirectTo: 'user/products', pathMatch: 'full'},
  {path: '**', redirectTo: 'user/products', pathMatch: 'full'},

  {path: '404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
