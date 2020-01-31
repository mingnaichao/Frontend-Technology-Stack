import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public keyWord: string;
  public todoList: any[] = [];

  // 添加数据
  toAdd(e: any): void {
    if (e.keyCode === 13) {
      if (!this.todolistHasKeyword(this.todoList, this.keyWord)) {
        this.todoList.push({
          title: this.keyWord,
          status: 0 // 0表示代办事项  1表示已完成事项
        });
        this.keyWord = '';
      } else {
        alert('数据已经存在');
        this.keyWord = '';
      }
    }
  }

  // 校验数据是否存在
  todolistHasKeyword(todoList: any, keyWord: string): boolean {
    if (!keyWord) { return false; }
    for (const item of todoList) {
      if (item.title === keyWord) {
        return true;
      }
    }
    return false;
  }

  // 删除数据
  deleteWord(i: number): void {
    this.todoList.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
