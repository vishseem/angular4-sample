import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {
  productObj: Product;
  productArray: Product[];

  // _prodService is now the member of the class
  // will be injected inside the component as DI
  constructor(private _prodService: ProductService) { 
    this.productObj = new Product();
    this.productObj.prodId = 100;
    this.productObj.prodName = 'xx';
    this.productObj.prodPrice = 1000;
    
  }

  ngOnInit() {
  }

  loadProducts() {
    // calling the service
    this.productArray = this._prodService.getProducts();
  }

}
