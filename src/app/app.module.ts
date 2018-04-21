import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { convertToSpaces } from './shared/convert-to-spaces';
import { ProductDetailComponent } from './products/product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    convertToSpaces,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
