import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddressComponent } from './components/address/address.component';



@NgModule({
  declarations: [UserComponent, AddressComponent], // user模块中的组件
  imports: [
    CommonModule
  ],
  exports: [UserComponent, AddressComponent] // 暴露组件 让其他模块里面可以使用暴露的组件
})
export class UserModule { }
