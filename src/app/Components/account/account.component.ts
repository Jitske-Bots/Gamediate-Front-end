import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { Account } from '../../Models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account = {} as Account;

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
  //toDo: checking needs to be done in back-end
  public btnEdit(_account:Account) : void {
    _account.postalCode
    if(_account.firstName === "") {
      _account.firstName = this.account.firstName;
    }
    if(_account.lastName === "") {
      _account.lastName = this.account.lastName;
    }
    if(_account.address === "") {
      _account.address = this.account.address;
    }
    if(_account.houseNumber === "") {
      _account.houseNumber = this.account.houseNumber;
    }
    if(_account.city === "") {
      _account.city = this.account.city;
    }
    if(_account.postalCode === "") {
      _account.postalCode = this.account.postalCode;
    }
    if(_account.phoneNumber.toString() === "") {
      _account.phoneNumber = this.account.phoneNumber;
    }
    _account.id = this.account.id;
    _account.email = this.account.email;
    _account.password = this.account.password;

    this.submitEdit(_account);
    this._cookieService.delete('user');
    this._cookieService.set("user", JSON.stringify(_account));
  }
  private submitEdit(_account:Account) : void {
    this.accountService.editAccount(_account).subscribe(_account => {
      this.account = _account
    });
    console.log(this.account);

  }
}