import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    constructor(public http: HttpClient, public httpservice: HttpserviceService) { }

    ngOnInit() { }

    // get请求
    getApi(): any {
        const api = 'http://a.itying.com/api/productlist';
        this.http.get(api).subscribe((resp) => {
            console.log('get请求', resp);
        });
    }

    // post请求
    postApi(): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const api = 'http://127.0.0.1:3000/doLogin';
        this.http.post(api, {
            username: '张三',
            age: '20'
        }, httpOptions).subscribe((resp) => {
            console.log('post请求', resp);
        });
    }

    // jsonp请求 服务器必须得支持jsonp（url后加callback=xxx验证）
    jsonpApi(): void {
        const api = 'http://a.itying.com/api/productlist';
        this.http.jsonp(api, 'callback').subscribe((resp) => {
            console.log('jsonp请求', resp);
        });
    }

    // axios请求
    axiosGet(): void {
        const api = 'http://a.itying.com/api/productlist';
        this.httpservice.axiosGet(api).subscribe((data) => {
            console.log('axios请求', data);
        });

    }

}
