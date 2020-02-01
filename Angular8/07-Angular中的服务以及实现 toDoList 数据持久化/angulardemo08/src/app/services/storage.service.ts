import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setInfo(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getInfo(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  removeInfo(key: string): void {
    localStorage.removeItem(key);
  }
}
