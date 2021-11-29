import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Login } from '../login';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signIn: Account = {} as Account; 
  public errors:string = {} as string;

  constructor(private router: Router, private accountService: AccountService, private _cookieService:CookieService) { }

  ngOnInit(): void {
  }
  public signupBtnClick() : void {
    this.router.navigateByUrl('/signup')
  }
  public loginClick(account:Account) : void {
    console.log(account);
    this.signIn = account;
    this.accountService.login(this.signIn).subscribe(account => {
      this.signIn = account
    },
    error => {
      this.errors = error;
    },
    () => {
      this.router.navigateByUrl('');
    }
    );
    this._cookieService.set("user", JSON.stringify(this.signIn.email));
  }
}
