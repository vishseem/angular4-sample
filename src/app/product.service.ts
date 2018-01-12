import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

  productDetails: Product[];

  constructor() { 
    this.productDetails = [
      {"prodId":101, "prodName":"iPhone", "prodPrice":65000},
      {"prodId":102, "prodName":"iPad", "prodPrice":76000},
      {"prodId":103, "prodName":"iPod", "prodPrice":50000},
      {"prodId":104, "prodName":"Mac Book Air", "prodPrice":120000},
      {"prodId":105, "prodName":"Fitbit", "prodPrice":12000},
    ]
  }

  getProducts(): Product[] {
    return this.productDetails;
  }

}
