import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import {ProductsService} from "../services/products/products.service";
@Injectable({providedIn: 'root'})
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}
  resolve(ars: ActivatedRouteSnapshot) {
    return this.productsService.getProducts();
  }
}
