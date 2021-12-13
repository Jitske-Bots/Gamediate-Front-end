import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  msg: Message = new Message();
  msgInboxArray: Message[] = [];

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: Message) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }
  public send(): void {
    if(this.msg) {
      if(this.msg.user.length == 0 || this.msg.user.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msg);                   // Send the message via a service
      }
    }
  }
  addToInbox(obj: Message) {
    let newObj = new Message();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }

}
