import { Component } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamediate-front-end';

  constructor(private router: Router, private _cookieService:CookieService) {

  }
  ngOnInit(): void {

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
