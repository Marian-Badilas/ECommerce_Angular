import { Component } from '@angular/core';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCategoriesComponent, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
