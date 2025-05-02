import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './meniu/topbar.component';
import { DescriptionComponent } from './description/description.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchbarComponent,
    TopBarComponent,
    DescriptionComponent,
    ProductsComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
