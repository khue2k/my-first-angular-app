import { Component } from '@angular/core';
import { Product } from '../../common/Product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  changeDetail(form: NgForm) {
    console.log(form.value)
    this.product.productCode = form.value.productCode;
    this.product.productCode = this.product.productCode.toUpperCase()
    this.product.productName = form.value.productName;

  }
  product: Product;
  constructor() {
    this.product = new Product('', '');
  }

}
