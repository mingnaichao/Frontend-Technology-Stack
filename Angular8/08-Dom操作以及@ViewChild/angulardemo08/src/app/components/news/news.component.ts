/*
  ViewChild获取dom节点
    1、模板中给dom起一个名字
      <div #myBox>
        我是一个dom节点
      </div>

    2、在业务逻辑里面引入ViewChild
    import { Component, OnInit,ViewChild} from '@angular/core';

    3、写在类里面
      @ViewChild('myBox') myBox:any;

    4、ngAfterViewInit生命周期函数里面获取dom
      this.myBox.nativeElement
*/

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  // 获取dom节点
  @ViewChild('myBox', { static: false }) myBox: any;
  // 获取子组件
  @ViewChild('header', { static: false }) header: any;

  constructor() { }

  // 初始化指令/组件
  ngOnInit() {
  }

  // 初始化完组件视图及其子视图之后调用
  ngAfterViewInit(): void {
    console.log('1', this.myBox);
    console.log('2', this.myBox.nativeElement);
    this.myBox.nativeElement.style.width = '100px';
    this.myBox.nativeElement.style.height = '100px';
    this.myBox.nativeElement.style.background = 'red';
    console.log('3', this.myBox.nativeElement.innerHTML);
  }

  getChildFunc(): void {
    console.log(this.header); // 获取子组件类
    this.header.run(); // 执行子组件run方法
  }

}
