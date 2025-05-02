import { Component } from '@angular/core';
import { mockedProduct } from '../models/mocked-objects/mocked-products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    standalone: false
})
export class ProductsComponent {
  selectedProduct = mockedProduct;

  get price() {
    return this.selectedProduct.price + ' lei';
  }
}
