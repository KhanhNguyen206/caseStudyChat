import {Injectable} from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  users: User[] = [
    {
      userName: 'admin1',
      avatar: '../../assets/image/ava1.jpg',
      status: 'Never say never'
    },
    {
      userName: 'admin2',
      avatar: '../../assets/image/ava2.jpg',
      status: 'Check it out, man'
    },
    {
      userName: 'admin3',
      avatar: '../../assets/image/ava3.jpg',
      status: 'Something wrong'
    },
    {
      userName: 'admin3',
      avatar: '../../assets/image/ava4.jpg',
      status: ''
    },
    {
      userName: 'admin4',
      avatar: '../../assets/image/ava5.jpg',
      status: ''
    }
  ];

  constructor() {
  }
}
