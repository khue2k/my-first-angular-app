import {Routes} from '@angular/router';
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TutorialsListComponent} from "./tutorials-list/tutorials-list.component";
import {TutorialDetailsComponent} from "./tutorial-details/tutorial-details.component";
import {AddTutorialComponent} from "./add-tutorial/add-tutorial.component";

export const routes: Routes = [
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'tutorials', component: TutorialsListComponent},
  {path: ' tutorials/:id', component: TutorialDetailsComponent},
  {path: 'add', component: AddTutorialComponent}
];

