import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  // 加载网路图片
  public picUrl = 'https://img.alicdn.com/tfs/TB1yF2HgO_1gK0jSZFqXXcpaXXa-194-99.png';

  public list: any[] = [
    {
      title: '我是新闻1'
    },
    {
      title: '我是新闻2'
    },
    {
      title: '我是新闻3'
    }
  ];

  public flag: boolean;

  // 1表示已经支付  2支付并且确认订单  3表示已经发货   4表示已经收货   其他、无效
  public orderNumber: number;

  public inputValue: string;
  public blue: boolean;
  public orangeCol: string;
  public today: Date;
  constructor() {
    this.title = '我是一个tiele';
    this.flag = true;
    this.orderNumber = 3; // 已经收货
    this.blue = true;
    this.orangeCol = 'orange';
    this.today = new Date();
  }

  ngOnInit() {
  }
  // 点击事件
  getData(): void {
    alert(this.title);
  }
  setData(): void {
    this.title = '我是一个改变后的值';
    alert(this.title);
  }
  // 获取表单数据
  keyUpFunc(e): void {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      console.log('按了一下回车');
    }
  }
  keyDownFunc(e): void {
    if (e.keyCode === 13) {
      console.log('按了一下回车');
    } else {
      // e.target 获取dom对象
      console.log(e.target.value);
    }
  }

}
