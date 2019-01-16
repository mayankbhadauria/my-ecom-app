import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent{
  @Input() event:any;
  @Output() getProductDetails = new EventEmitter();

  productDetail = (id) => {
    console.log('clicked');
    this.getProductDetails.emit(id);
  }

  parentCallingChild = () => {
    console.log('parent calling child thorugh refrence');
  }

}
