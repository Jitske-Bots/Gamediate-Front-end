import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';       // import signalR
import { HttpClient } from '@angular/common/http';
import { Message } from '../Models/Message';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection: any = new signalR.HubConnectionBuilder().withUrl("https://localhost:44360/chatsocket").configureLogging(signalR.LogLevel.Information)
  .build();   // mapping to the chathub as in startup.cs
                             

  readonly POST_URL = "https://localhost:44360/chat/send";

  private receivedMessageObject: Message = {} as Message;

  //An Observer can subscribe to the Subject and receive value from it. 
  //Subject adds them to its collection observers.
  //The Subject also implements the next, error & complete methods.
  private sharedObj = new Subject<Message>();

  constructor(private http: HttpClient) { 
    this.connection.onclose(async () => {
      await this.start();
    });

    this.connection.on("ReceiveOne", (user:string, message:string) => 
    { this.mapReceivedMessage(user, message); });     //if there is a message
    this.start();   
  }

    // Start the connection
    public async start() {
      try {
        await this.connection.start();
        console.log("connected");
      } catch (err) {
        console.log(err);
        setTimeout(() => this.start(), 5000);
      } 
    }
    //maps the received message to the sharedObj
    private mapReceivedMessage(user: string, message: string): void {
      this.receivedMessageObject.user = user;
      this.receivedMessageObject.msgText = message;
      this.sharedObj.next(this.receivedMessageObject);
   }

  // Calls the controller method
  //used to send the message to the chatBox
  public broadcastMessage(msgDto: any) {
    this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
  }
  //used to receive send messages
  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }
}
