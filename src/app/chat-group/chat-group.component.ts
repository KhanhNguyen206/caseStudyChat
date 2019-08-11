import {Component, OnInit} from '@angular/core';
import {Message} from '../Message';
import {FormControl, FormGroup} from '@angular/forms';
import {ChatService} from '../chat.service';
import {User} from '../User';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.scss']
})
export class ChatGroupComponent implements OnInit {

  users = this.chatService.users;
  user1 = this.chatService.users[0];
  user2 = this.chatService.users[1];
  content = '';
  contentStatus = '';
  messages: Message[];
  messageForm: FormGroup;
  statusForm: FormGroup;
  user: User;

  constructor(private chatService: ChatService) {
    this.messageForm = new FormGroup({
      message: new FormControl(''),
    });
    this.statusForm = new FormGroup({
      status: new FormControl(''),
    });
    this.messages = [new Message(this.user1, 'Hello!'), new Message(this.user1, 'Is it me you re looking for...') ];
    this.user = this.user2;
  }

  ngOnInit() {
  }

  addMessage() {
    this.messages.push(new Message(this.user, this.content));
    this.content = '';
  }

  changeUser(user: User) {
    this.user = user;
  }

  changeStatus() {
    let i = 0;
    while (i < this.users.length) {
      if (this.user === this.users[i]) {
        this.users[i].status = this.contentStatus;
        break;
      }
      i++;
    }
  }
}
