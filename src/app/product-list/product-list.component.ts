import { Component } from '@angular/core';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-product-list',
  imports: [SearchbarComponent, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
