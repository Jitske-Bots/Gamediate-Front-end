import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';          // import signalR
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

  private receivedMessageObject: Message = new Message();
  private sharedObj = new Subject<Message>();

  constructor(private http: HttpClient) { 
    this.connection.onclose(async () => {
      await this.start();
    });
   this.connection.on("ReceiveOne", (user:string, message:string) => { this.mapReceivedMessage(user, message); });
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
    private mapReceivedMessage(user: string, message: string): void {
      this.receivedMessageObject.user = user;
      this.receivedMessageObject.msgText = message;
      this.sharedObj.next(this.receivedMessageObject);
   }

  // Calls the controller method
  public broadcastMessage(msgDto: any) {
    this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
    // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  }
  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }
}
