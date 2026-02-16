import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  get total(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }

}
