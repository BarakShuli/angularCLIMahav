import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chatWebSocket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatWS',
  templateUrl: './chatWS.component.html',
  styleUrls: ['./chatWS.component.css'],
  providers: [ChatService]
})
export class ChatWSComponent  implements OnInit, OnDestroy {

  messages:any  = [];
  connection:any;
  message:any;

  constructor(private chatService: ChatService) { }

  sendMessage() {
    console.log("this.message ", this.message);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
