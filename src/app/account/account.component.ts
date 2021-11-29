import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account = {} as Account

  constructor(private _cookieService: CookieService, private router: Router, 
    private accountService:AccountService) { }

  ngOnInit(): void {
    this.getAccount()

  }
  public btnLogout() : void {
    this._cookieService.delete('user');
    this.router.navigateByUrl('');
    
  }
  public getAccount() : void {
    var _account = (JSON.parse(this._cookieService.get("user")));
    this.account = _account;
    console.log(this.account);
  }
}
