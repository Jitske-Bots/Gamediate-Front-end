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

  msg: Message = {} as Message;
  msgInboxArray: Message[] = [];

  
  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: Message) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }
  // Send the message via a service
  //if there is a message and if the message isn't empty
  //it wil get send
  public send(): void {
    if(this.msg) {
      if(this.msg.user.length == 0 || this.msg.msgText.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msg);                   
      }
    }
  }
  //adds the written messages to the chatBox
  //it gets a message from the service
  //then pushes it to an array
  addToInbox(obj: Message) {
    let newObj = {} as Message;
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }

}
