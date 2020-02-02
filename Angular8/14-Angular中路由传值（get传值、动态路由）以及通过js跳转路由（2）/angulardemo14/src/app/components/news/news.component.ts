import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public data: any[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.data.push(`这是第 ${i} 条数据`);
    }
  }

}
