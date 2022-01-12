import { Component, OnInit } from '@angular/core';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public newAccount: Account = {} as Account; 
  public showPassword: boolean = false;

  public mockData: Account[] = [];

  constructor(private accountService: AccountService,     
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  public onClickSubmit(account: Account) : void {
      this.newAccount = account;
      this.accountService.signUp(this.newAccount).subscribe(account => {
        this.newAccount = account
    });

  }
}
