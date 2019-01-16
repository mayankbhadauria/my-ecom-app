import { Component, OnInit, Input } from '@angular/core';

import { ProductsDetailComponent } from './products-detail/products-detail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

      event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        }
   }

   getProdDetailwithId(id) {
     console.log('got an id '+ id);
   }

}
