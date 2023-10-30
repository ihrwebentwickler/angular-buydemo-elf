import {bootstrapApplication} from "@angular/platform-browser";
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withDebugTracing,
  withPreloading
} from '@angular/router';

import {AppComponent} from "./app.component";
import {ProductsComponent} from "./core/components/products/products.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent
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

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    )
  ]
});
