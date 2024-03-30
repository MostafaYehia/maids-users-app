import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';


/**
 * Used with server-side rendering to solve the problem with localStorage in the server
 * if you don't use server-side rendering you can remove this service
 */

@Injectable()
export class BrowserStorageServerService extends BrowserStorageService {
  constructor() {
    super({
      clear: () => { },
      getItem: (key: string) => JSON.stringify({ key }),
      setItem: (key: string, value: string) => JSON.stringify({ [key]: value }),
      key: (index: number) => index.toString(),
      length: 0,
      removeItem: (key: string) => JSON.stringify({ key }),
    });
  }
}