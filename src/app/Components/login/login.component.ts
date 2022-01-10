import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { Login } from '../../Models/login';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountData } from 'src/app/mock-data/accountData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signIn: Account = {} as Account; 
  public errors:string = {} as string;
  public mockAccounts : Account[] = {} as Account[]
  public canLogin : boolean = {} as boolean;

  constructor(private router: Router, private accountService: AccountService, private _cookieService:CookieService) { }

  ngOnInit(): void {
  }
  public signupBtnClick() : void {
    this.router.navigateByUrl('/signup')
  }
  public loginClick(account:Account) : void {
    console.log(account);
    this.accountService.login(account).subscribe(account => {
      this.signIn = account
    },
    error => {
      this.errors = error;
    },
    () => {
      console.log(this.signIn);
      this._cookieService.set("user", JSON.stringify(this.signIn));
      this.router.navigateByUrl('');
    }
    );
  }
  public loginClickTest(account:Account) : void {
    let loggedIn = false;
    const data: AccountData = new AccountData();
    this.mockAccounts = data.getMockData();
    this.mockAccounts.forEach(function (value) {
      if(value.email == account.email) {
        loggedIn = true;
      };
    });
    if(loggedIn) {
      this.canLogin = true;
    }
    else if(!loggedIn) {
      this.canLogin = false;
    }    
  }
}
