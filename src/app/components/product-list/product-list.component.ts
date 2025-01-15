import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StarComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchText: string = ''; // Binding for search input
  title: string = 'Product List';
  selectedProduct: Product | null = null; // Selected product to show in modal
  products: Product[] = [
    new Product('P01', 'Hat'),
    new Product('P02', 'Shirt'),
    new Product('P03', 'Shoes')
  ];
  productSearchresult = this.products; // Filtered product list

  constructor() { }

  ngOnInit(): void {
  }

  reload(): void {
    window.location.reload(); // Reload page on demand
  }

  deleteProduct(product: Product): void {
    console.log('Deleting product:', product);
    this.productSearchresult = this.productSearchresult.filter((p) => p !== product);
    // You can add logic to handle actual deletion, such as making an API call
  }

  editProduct(product: Product): void {
    console.log('Editing product:', product);
    // Add logic to handle product edit
  }

  viewProduct(product: Product): void {
    this.selectedProduct = product; // Show selected product in modal
  }

  search(): void {
    // If searchText is empty, show all products
    if (this.searchText.trim() === '') {
      this.productSearchresult = this.products;
    } else {
      const searchTerm = this.searchText.trim().toLowerCase(); // Make search case-insensitive
      this.productSearchresult = this.products.filter((p) => {
        return p.productCode.toLowerCase().includes(searchTerm) ||
          p.productName.toLowerCase().includes(searchTerm); // Filter by code or name
      });
    }
  }

  closeModal(): void {
    this.selectedProduct = null; // Hide modal by setting selectedProduct to null
  }

  onKeyPress(event: KeyboardEvent): void {
    // Optional: Only allow alphanumeric characters (letters and numbers)
    const regex = /^[A-Za-z0-9]*$/; // Alphanumeric characters
    const char = String.fromCharCode(event.charCode);

    if (!regex.test(char)) {
      event.preventDefault(); // Prevent input if it's not alphanumeric
    }
  }

  changeStarRating(message: String) {
    console.log(`Message :${message}`)
  }
}
