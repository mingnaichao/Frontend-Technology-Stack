import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';
import { PcontentComponent } from './pcontent/pcontent.component';
import { PlistComponent } from './plist/plist.component';


@NgModule({
  declarations: [ProductComponent, CartComponent, PcontentComponent, PlistComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
