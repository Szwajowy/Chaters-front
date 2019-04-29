import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chat } from '../chat.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  chat: Chat;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    return this.chatService.getChat()
      .subscribe(res => {
        this.chat = {
          id: res['info']['id'],
          name: res['info']['name'],
          messages: res['messages']
        } ;
      });
  }

}
