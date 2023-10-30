import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgForOf, NgIf} from "@angular/common";

import { BasketService } from "../../../shared/services/basket/basket.service";
import { Product } from "../../../shared/models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    DecimalPipe,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly basketService: BasketService
  ) {
  }

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data['products'];
  }

  onClickAddToBasket(product: Product) {
    this.basketService.addToBasket(product);
  }

  onClickRemoveFromBasket(product: Product) {
    this.basketService.removeFromBasket(product);
  }
}
