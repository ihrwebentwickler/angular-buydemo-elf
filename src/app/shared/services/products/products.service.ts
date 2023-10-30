import { Injectable } from '@angular/core';
import {Product} from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: 1, price: 232.15, name: "HP Laptop 34A", description: 'Heute im Angebot, der neuste Laptop von HP.', amount: 6},
      { id: 2, price: 86.12, name: "Sinist Tastatur", description: 'Die neue Gamer-Tastatur der Generation x', amount: 5},
      { id: 3, price: 99.99, name: "Pumust Mouse-Wheel", description: 'Die beste Maus mit einem Mouse-Wheel', amount: 3},
      { id: 4, price: 152.76, name: "TFT Monitor Super", description: 'Ultra-HD mit einem grossen Farbsprektrum', amount: 4}
    ];
  }
}
