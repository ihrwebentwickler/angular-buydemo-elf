import {Product} from "../shared/models/product";

export interface BasketStore {
  id: number;
  product: Product,
  amount: number;
}
