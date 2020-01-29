import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  /*
    声明属性的几种方式：
      public      共有 *（默认）   可以在这个类里面使用、也可以在类外面使用
      protected   保护类型        他只有在当前类和它的子类里面可以访问
      private     私有            只有在当前类才可以访问这个属性
  */
  // 定义普通数据
  public title = '我是新闻组件';
  msg = '我是一个新闻组件的msg';

  // 推荐
  public student: any = '我是一个学生的属性（数据）';
  public userinfo: object = {
    username: '张三',
    age: '20'
  };

  public message: any;
  public content = '<h2>我是一个html标签</h2>';

  // 定义数组
  public arr = ['1111', '2222', '33333'];

  // 推荐
  public list: any[] = ['我是第一个新闻', 222222222222, '我是第三个新闻'];
  public items: Array<string> = ['我是第一个新闻', '我是第二个新闻'];
  public userlist: any[] = [
    {
      username: '张三',
      age: 20
    },
    {
      username: '李四',
      age: 21
    },
    {
      username: '王五',
      age: 40
    }
  ];
  public cars: any[] = [
    {
      cate: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '30万'
        },
        {

          title: '宝马x2',
          price: '30万'
        },
        {

          title: '宝马x3',
          price: '40万'
        }
      ]
    },
    {
      cate: '奥迪',
      list: [
        {
          title: '奥迪q1',
          price: '40万'
        },
        {
          title: '奥迪q2',
          price: '40万'
        },
        {
          title: '奥迪q3',
          price: '30万'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
