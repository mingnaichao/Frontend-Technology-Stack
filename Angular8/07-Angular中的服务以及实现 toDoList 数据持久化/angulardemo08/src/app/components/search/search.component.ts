/*
  1、ng g service services/storage
  2、app.module.ts 里面引入创建的服务 并且声明
  import { StorageService } from './services/storage.service'
  providers: [StorageService]

  3、在用到的组件里面
  // 引入服务
  import { StorageService } from '../../services/storage.service';
  //初始化
  constructor(public storage:StorageService) {
      let s=this.storage.get();
      console.log(s);
  }
*/
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWord: string;
  public historyList: any[] = [];

  public storage: StorageService;
  constructor(storage: StorageService) {
    this.storage = storage;
    console.log(this.storage);
  }

  ngOnInit() {
    console.log('页面刷新会触发这个生命周期函数');
    this.historyList = this.storage.getInfo('searchHistoryList');
  }

  doSearch(): void {
    if (this.historyList.indexOf(this.keyWord) === -1) {
      this.historyList.push(this.keyWord);
      this.storage.setInfo('searchHistoryList', this.historyList);
    }
    this.keyWord = '';
  }

  deleteWord(i: number): void {
    this.historyList.splice(i, 1);
    this.storage.setInfo('searchHistoryList', this.historyList);
  }
}
