import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
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
