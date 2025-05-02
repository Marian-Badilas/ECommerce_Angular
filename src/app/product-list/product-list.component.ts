import { Component } from '@angular/core';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCategoriesComponent, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
