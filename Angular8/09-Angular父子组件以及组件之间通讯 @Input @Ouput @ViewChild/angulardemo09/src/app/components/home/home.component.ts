import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public parentMsg = '这是父组件的信息';

  // 获取子组件dom节点
  @ViewChild('childMsg', { static: false }) childMsg: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.childMsg);
  }

  // 通过@ViewChild方式获取子组件数据
  getChildInfo(): void {
    this.childMsg.run(); // 调用子组件方法
  }

  // 通过@Output获取子组件发送的数据
  getChildSendMsg(msg: string): void {
    alert(msg);
  }

}
