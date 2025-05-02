import { Component } from '@angular/core';
import { mockedProduct } from '../../../models/mocked-objects/mocked-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectedProduct = mockedProduct;

  get price() {
    return this.selectedProduct.price + ' lei';
  }
}
