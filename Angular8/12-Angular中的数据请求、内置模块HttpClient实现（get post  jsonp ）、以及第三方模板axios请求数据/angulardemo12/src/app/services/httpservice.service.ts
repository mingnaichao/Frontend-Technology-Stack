import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs'; // 导入Rxjs模块


@Injectable({
    providedIn: 'root'
})
export class HttpserviceService {

    constructor() { }

    axiosGet(api: string): any {
        return new Observable<any>((observer) => {
            axios.get(api).then((resp) => {
                observer.next(resp);
            });
        });
    }
}
