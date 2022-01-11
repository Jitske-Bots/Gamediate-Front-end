import {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Models/account';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountURL = "https://localhost:44300/account"
  private registerURL = this.accountURL + "/signup"
  private loginURL = this.accountURL + "/login"
  private getUserURL = this.accountURL + "/get"
  private editUser = this.accountURL + "/edit"


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public signUp(account:Account) : Observable<any> {
    return this.http.post(this.registerURL, account, this.httpOptions).pipe(catchError(this.handleSignUpError));
    
  }
  public login(account:Account) : Observable<any> {
    return this.http.post(this.loginURL, account, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Wrong password or email! Please try again`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  private handleSignUpError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      if(error.status == 404) {
        errorMessage = 'Not all fields are filled in!'
      }
      else {
        errorMessage = `Email already exists!`;
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getUser(account:Account) : Observable<Account> {
    return this.http.get<Account>(this.getUserURL, this.httpOptions);
  }
  public editAccount(account:Account) : Observable<any> {
    return this.http.post(this.editUser, account, this.httpOptions);

  }
}
