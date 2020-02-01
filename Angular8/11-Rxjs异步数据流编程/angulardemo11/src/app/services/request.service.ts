import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // 导入Rxjs模块

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    public username: string;
    constructor() { }

    // 1.同步
    getData(): string {
        return 'this is service data';
    }

    // 2.callback
    getCallBackData(func: any): void {
        setTimeout(() => {
            this.username = '张三';
            func(this.username);
        }, 1000);
    }

    // 3.promise
    getPromiseData(): any {
        return new Promise((reverse) => {
            setTimeout(() => {
                const p = 'promise异步输出';
                console.log(p);
            }, 2000);
        });
    }

    // 4.Rxjs
    getRxjsData() {
        return new Observable<any>((observer) => {
            setTimeout(() => {
                observer.next('rxjs异步数据输出');
                // observer.error('错误数据输出');
            }, 3000);
        });
    }

    // 5. rxjs多次执行
    getRxjsIntervalData() {
        let count = 0;
        return new Observable<any>((observer) => {
            setInterval(() => {
                count++;
                observer.next('rxjs多次执行输出' + count);
            }, 1000);
        });

    }

    // 6.
    getRxjsIntervalNum() {
        let count = 0;
        return new Observable<any>((observer) => {
            setInterval(() => {
                count++;
                observer.next(count);
            }, 1000);
        });
    }
}
