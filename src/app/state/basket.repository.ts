import { Injectable } from "@angular/core";

import {createStore} from "@ngneat/elf";
import {
  deleteEntities,
  getAllEntities,
  getEntity,
  upsertEntities,
  withEntities
} from "@ngneat/elf-entities";
import { BasketStore } from "./basket.interface";

const store = createStore(
  { name: 'basketStore' },
  withEntities<BasketStore>()
);

@Injectable({ providedIn: 'root' })
export class BasketRepository {

  setBasket(basketStore: BasketStore): BasketStore[] {
    store.update(upsertEntities({ id: basketStore.id, product: basketStore.product, amount: basketStore.amount }));
    return this.selectBaskets();
  }

  selectBaskets(): BasketStore[] {
    return store.query(getAllEntities());
  }

  selectBasket(id: number): BasketStore | undefined {
    return store.query(getEntity(id));
  }

  deleteBasket(id: number): BasketStore[] {
    store.update(deleteEntities(id));
    return this.selectBaskets();
  }
}
