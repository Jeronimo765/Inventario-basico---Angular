import { Component, EventEmitter, Output } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  name: string = '';
  price: number = 0;

  @Output() productCreated = new EventEmitter<Product>();

  addProduct() {

    if (!this.name.trim() || this.price <= 0) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: this.name,
      price: this.price
    };
    this.productCreated.emit(newProduct);

    this.name = '';
    this.price = 0;
  }
}