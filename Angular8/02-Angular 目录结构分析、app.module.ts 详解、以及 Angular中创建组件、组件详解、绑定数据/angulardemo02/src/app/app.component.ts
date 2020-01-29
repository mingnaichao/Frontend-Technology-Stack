// 引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo02'; // 定义属性

  constructor() { // 构造函数

  }
}
