import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})

export class ProductsDetailComponent implements OnInit {
  @Input() event:any;
  @Output() getProductDetails = new EventEmitter();

  constructor( private route:ActivatedRoute){}

  ngOnInit(){
    console.log('product detail'+this.route.snapshot.params['id']);
  }

  productDetail = (id) => {
    this.getProductDetails.emit(id);
  }

  parentCallingChild = () => {
    console.log('parent calling child thorugh refrence');
  }

}
