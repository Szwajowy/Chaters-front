import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private http: HttpClient) { }

  getChat() {
    return this.http.get(API_URL + '/chat/2');
  }
}
