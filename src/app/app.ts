import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {

  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  get totalProducts(): number {
    return this.products.length;
  }

  get totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
