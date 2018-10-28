import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  sessionStorageGet(key: string): string {
    return window.sessionStorage.getItem(key);
  }

  localStorageGet(key: string): string {
    return window.localStorage.getItem(key);
  }

  sessionStorageSet(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }

  localStorageSet(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
}
