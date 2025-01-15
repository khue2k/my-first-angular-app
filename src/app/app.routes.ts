import { Routes } from '@angular/router';
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent },
];
