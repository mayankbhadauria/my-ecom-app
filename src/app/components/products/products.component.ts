import { Component, OnInit, Input } from '@angular/core';

import { ProductsDetailComponent } from './products-detail/products-detail.component';

import { ProductsService } from '../../shared/products.service';

import { Store, select } from '@ngrx/store'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  product:any;

  products:any;

  constructor(
    private store: Store<any>, 
    private productsService: ProductsService,
    private router: Router) {}

   ngOnInit() {
     this.productsService.getProducts().next(products => {
       this.products = products;
       console.log('products '+ this.products);
      });

      this.store.pipe(select('product')).subscribe(
        products => {
          if (products) {
            console.log(products);
          }
        }
      )
   }

   checkChanges(value: boolean): void {
     this.store.dispatch({
       type: 'PRODUCT-DISCRIPTION',
       payload: value
     })
   }

   getProdDetailwithId(id) {
      //this.product = this.products[id];
   }

   goToDetail(prodId){
     this.router.navigate(['user/products/'+ prodId ]);
   }

}
