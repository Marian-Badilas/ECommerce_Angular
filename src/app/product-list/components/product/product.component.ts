import { Component } from '@angular/core';
import { mockedProduct1 } from '../../../models/mocked-objects/mocked-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectedProduct = mockedProduct1;

  get price() {
    return this.selectedProduct.price + ' lei';
  }
}
