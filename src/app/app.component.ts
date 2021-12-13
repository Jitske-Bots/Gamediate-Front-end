import { Component } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { SignalrService } from './Services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hubHelloMessage: string = "";

  constructor(private router: Router, private _cookieService:CookieService, public signalrService: SignalrService) {

  }
  ngOnInit(): void {
    this.signalrService.hubHelloMessage.subscribe((hubHelloMessage: string) => {
      this.hubHelloMessage = hubHelloMessage;
    });
    
    this.signalrService.connection
      .invoke('Hello')
      .catch(error => {
        console.log(`SignalrDemoHub.Hello() error: ${error}`);
        alert('SignalrDemoHub.Hello() error!, see console for details.');
      }
    );

  }
  public chatBtnClick() : void {
    this.router.navigateByUrl('/chat')
  }
  public favoriteBtnClick() : void {
    var getCookie = this.getAccountCookie()
    console.log(getCookie);
    if(!getCookie) {
      this.router.navigateByUrl('/login')
    }
    else if(getCookie) {
      this.router.navigateByUrl('/wishlist')
    }
  }
  public homeBtnClick() : void {
    this.router.navigateByUrl('')

  }
  public btnClick(): void {
    this.router.navigateByUrl('/cart')
  }
  public accountBtnClick() : void {
    var getCookie = this.getAccountCookie()
    console.log(getCookie);
    if(!getCookie) {
      this.router.navigateByUrl('/login')
    }
    else if(getCookie) {
      this.router.navigateByUrl('/account')
    }

  }
  public getAccountCookie() : boolean {
    console.log(this._cookieService.get('user'));
    if(document.cookie.indexOf('user') == -1) {
      return false;
    }
    else {
      return true
    }

  }

}
