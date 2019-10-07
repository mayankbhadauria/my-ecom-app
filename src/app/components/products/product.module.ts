import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';

import { ProductRoutingModule } from './product-routing.module'

import { ProductsService } from '../../shared/products.service';
import { DurationPipe } from '../../shared/duration.pipe';

import { Reducer } from './product.reducer'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailComponent,
    CheckoutComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature('product', Reducer)
  ],
  providers: [ProductsService]
})
export class ProductModule { }
