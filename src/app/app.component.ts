import { Component } from '@angular/core';
import { Product } from './common/Product';
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Sửa lỗi "styleUrl" thành "styleUrls"
})
export class AppComponent {

}
