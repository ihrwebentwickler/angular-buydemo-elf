import { Routes } from "@angular/router";
import { ProductsComponent } from "./core/components/products/products.component";
import { ProductsResolver } from "./shared/resolver/products-resolver";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: 'basket',
    loadComponent: () =>
      import('./features/basket/basket.component')
        .then(m => m.BasketComponent)
  },
  {
    path: '**', redirectTo: 'products', 'pathMatch': 'full'
  }
];
