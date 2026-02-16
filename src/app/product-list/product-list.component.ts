import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  @Output() productDeleted = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.productDeleted.emit(id);
  }

}
