import { Component } from '@angular/core';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductComponent } from './components/product/product.component';
import {
  mockedProduct1,
  mockedProduct2,
  mockedProduct3,
  mockedProduct4,
} from '../models/mocked-objects/mocked-products';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-list',
  imports: [ProductCategoriesComponent, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Product[] = [
    mockedProduct1,
    mockedProduct2,
    mockedProduct3,
    mockedProduct4,
  ];
}
