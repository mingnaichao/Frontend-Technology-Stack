import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';
import { PcontentComponent } from './pcontent/pcontent.component';
import { PlistComponent } from './plist/plist.component';

const routes: Routes = [
    {
        path: '', component: ProductComponent,
        children: [
            {
                path: 'cart', component: CartComponent
            },
            {
                path: 'pcontent', component: PcontentComponent
            }
        ]
    },
    {
        path: 'plist', component: PlistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
