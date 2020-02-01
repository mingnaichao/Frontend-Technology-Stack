import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() parentMsg: string; // 接收父组件传递的数据

  @Output() outer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  run(): void {
    alert('i am 子组件');
  }

  sendParentMsg(): void {
    // alert('我是子组件');
    this.outer.emit('这是子组件发送过来的信息');
  }

}
