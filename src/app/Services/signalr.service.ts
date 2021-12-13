import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  connection: signalR.HubConnection = {} as signalR.HubConnection;
  hubHelloMessage: BehaviorSubject<string> = {} as BehaviorSubject<string>;


  constructor() { 
    this.hubHelloMessage = new BehaviorSubject<string>("");
  }

  //this is a asynchronus task (the program moves to the next line of code 
  //before the task finishes)
  //Promise takes two arguments
  //resolve and reject are two functions themselves
  //inside this inner function we perform the asynchronous processing
  //when ready we can call resolve();
  //the promise is resolved on succesfull connection
  //and is rejected if the signalR connection fails
  public initiateSignalrConnection(): Promise<void>{
    return new Promise((resolve, reject) => {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:44304/signalrdemohub') // the SignalR server url
        .build();
      
      this.setSignalrClientMethods();
  
      this.connection
        .start()
        .then(() => {
          console.log(`SignalR connection success! connectionId: ${this.connection.connectionId} `);
          resolve();
        })
        .catch((error) => {
          console.log(`SignalR connection error: ${error}`);
          reject();
        });
    });
  }
  private setSignalrClientMethods(): void {
    this.connection.on('DisplayMessage', (message: string) => {
      this.hubHelloMessage.next(message);
    });
  }
}
