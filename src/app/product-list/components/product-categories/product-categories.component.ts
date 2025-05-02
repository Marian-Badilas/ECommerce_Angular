import { Component } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent {
  beverages = 'Beverages';
  cookies = 'Cookies';
  chia = 'Chia';
  granola = 'Granola';
  friends = 'Friends';
  special = 'Special';
  oats = 'Oats';

  onSelectProduct(product: string) {
    console.log('click ' + product);
  }
}
