import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../common/Product';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() product: Product | null = null; // Nhận sản phẩm từ component cha
  @Output() closeEvent = new EventEmitter<void>(); // Tạo sự kiện để đóng modal

  constructor() { }

  // Hàm để đóng modal
  close(): void {
    this.closeEvent.emit(); // Phát ra sự kiện để thông báo đóng modal
  }
}
