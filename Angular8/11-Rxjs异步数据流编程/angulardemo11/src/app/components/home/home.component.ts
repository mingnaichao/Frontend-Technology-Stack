import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public request: RequestService;
    constructor(request: RequestService) {
        this.request = request;
    }

    ngOnInit() {
        // 1.同步方法
        const d = this.request.getData();
        console.log('同步方法：', d);

        // 2.callbacl获取异步数据
        this.request.getCallBackData((data) => {
            console.log(data); // 1s后打印张三
        });

        // 3.promise获取异步数据
        const p = this.request.getPromiseData();
        p.then((data) => {
            console.log(data);
        });

        // 4.rxjs获取异步数据
        const rxjsData = this.request.getRxjsData();
        rxjsData.subscribe((data) => {
            console.log(data);
        });

        // 5.rxjs取消订阅
        const streem = this.request.getRxjsData();
        const s = streem.subscribe((data) => {
            console.log(data);
        });
        setTimeout(() => {
            s.unsubscribe(); // 过1秒以后撤回刚才的操作
        }, 1000);

        // 6.rxjs多次获取异步数据
        const rxjsIntervalData = this.request.getRxjsIntervalData();
        rxjsIntervalData.subscribe((data) => {
            console.log(data);
        });

        // 7.rxjs用工具方法对返回的数据进行处理
        const streemNum = this.request.getRxjsIntervalNum();
        streemNum.pipe(
            filter((value) => {
                if (value % 2 === 0) {
                    return true;
                }
            }),
            map((value) => {
                return value * value;
            })
        ).subscribe((data) => {
            console.log(data);
        });
    }
}
