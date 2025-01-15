import { Component } from '@angular/core';
import { Product } from './common/Product';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, ProductDetailComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Sửa lỗi "styleUrl" thành "styleUrls"
})
export class AppComponent {

}
