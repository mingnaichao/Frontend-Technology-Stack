import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 配置路由的模块
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'new', component: NewsComponent
    },
    {
        path: 'product', component: ProductComponent
    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full' // 匹配不到组件时加载的组件或者跳转的路由
    }
    // {
    //     path: '**', component: HomeComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
