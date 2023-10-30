import {Injectable} from '@angular/core';

import {Product} from "../../models/product";
import {BasketRepository} from "../../../state/basket.repository";

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(
    private readonly basketRepository: BasketRepository
  ) {
  }

  addToBasket(product: Product) {
    const basketStore = this.basketRepository.selectBasket(product.id);
    if (basketStore && basketStore.product.amount < basketStore.amount) {
      this.basketRepository.setBasket({id: product.id, product: product, amount: basketStore.amount + 1});
    } else {
      this.basketRepository.setBasket({id: product.id, product: product, amount: 1});
    }

    return this.basketRepository.selectBaskets();
  }

  removeFromBasket(product: Product) {
    const basketStore = this.basketRepository.selectBasket(product.id);
    if (basketStore && basketStore.amount !== 0) {
      this.basketRepository.setBasket({id: product.id, product: product, amount: basketStore.amount - 1});
    }

    return this.basketRepository.selectBaskets();
  }
}
