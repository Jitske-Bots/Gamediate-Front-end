import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public newAccount: Account = {} as Account; 


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  
  public onClickSubmit(account:Account) : void {
    console.log(account);
      this.newAccount = account;
      this.accountService.signUp(this.newAccount).subscribe(account => {
        this.newAccount = account
    });

  }
}
