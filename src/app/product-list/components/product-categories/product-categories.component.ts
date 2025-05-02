import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent {
  categories: string[] = [
    'Beverages',
    'Cookies',
    'Chia',
    'Granola',
    'Friends',
    'Special',
    'Oats',
  ];

  @Output() select = new EventEmitter();

  onSelectProductCategory(productCategory: string) {
    this.select.emit(productCategory);
  }
}
