import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  massages: string[] = [];

  constructor() {}

  add(message: string) {
    this.massages.push(message);
  }

  clear() {
    this.massages = [];
  }
}
