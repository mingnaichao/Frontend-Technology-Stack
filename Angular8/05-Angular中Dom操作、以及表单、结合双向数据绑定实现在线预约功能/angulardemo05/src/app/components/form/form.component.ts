import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',
    hobby: [
      {
        title: '吃饭',
        checked: false
      }, {
        title: '睡觉',
        checked: false
      }, {
        title: '敲代码',
        checked: false
      }
    ],
    mask: ''
  };
  constructor() {
  }

  ngOnInit() {
  }

  doSubmit(): void {
    console.log(this.peopleInfo);
  }

}
