import {User} from './User';

export class Message {
  userSend: User;
  content: string;
  constructor(userSend: User, content: string){
    this.userSend = userSend;
    this.content = content;
  }
}
