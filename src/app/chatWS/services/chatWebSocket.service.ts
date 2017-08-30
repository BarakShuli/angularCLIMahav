import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:1337';
  private socket = io(this.url);

  sendMessage(message:any) {
    console.log("socket--> ", this.socket);
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data:any) => {
        observer.next("result is=> "+ data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }
}