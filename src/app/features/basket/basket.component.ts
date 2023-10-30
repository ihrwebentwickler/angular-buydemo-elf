import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';

import {BasketStore} from "../../state/basket.interface";
import {BasketRepository} from "../../state/basket.repository";
import {BasketService} from "../../shared/services/basket/basket.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class BasketComponent implements OnInit {
  basketItems!: BasketStore[];

  constructor(
    private basketRepository: BasketRepository,
    private readonly basketService: BasketService
  ) {
  }

  ngOnInit(): void {
    this.basketItems = this.basketRepository.selectBaskets();
    console.log(this.basketItems);
  }

  onClickRemoveProduct(item: BasketStore): void {
    this.basketItems = this.basketRepository.deleteBasket(item.id);
  }

  onClickAddAmount(item: BasketStore) {
    this.basketItems = this.basketService.addToBasket(item.product);
  }

  onClickSubstractAmount(item: BasketStore) {
    this.basketItems = this.basketService.addToBasket(item.product);
  }
}
