import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWord: string;
  public historyList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doSearch(): void {
    if (this.historyList.indexOf(this.keyWord) === -1) {
      this.historyList.push(this.keyWord);
    }
    this.keyWord = '';
  }

  deleteWord(i: number): void {
    this.historyList.splice(i, 1);
  }
}
